import axios from "axios";
import Web3 from "web3";
import config from "./config.json";
import abi from "./abi.json";

declare let window: any;

const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND;
const GAMES_ROUTE = BACKEND_BASE_URL + "/gamePurchases";

export const buyGame = async (name: string) => {
  const payload = {
    player: window.ethereum.selectedAddress,
    receipt: {
      name: name,
      platform: "PC",
      marketplace: "Steam",
      purchaseDate: new Date().toISOString(),
      priceBoughtAt: 79.99,
    },
  };

  try {
    const response = await axios.post(GAMES_ROUTE, payload);

    alert(
      `Game purchase successful!\n\nHere's your receipt\n${JSON.stringify(
        payload.receipt,
        null,
        2
      )}\nCan be viewed at: ${response.data.tokenUri}`
    );
  } catch (err) {
    alert("Failed to buy game.");
    console.error(err);
  }
};

export const claimGame = async (id: number): Promise<boolean> => {
  // Get current account.
  const accounts = await window.ethereum.request({ method: "eth_accounts" });
  const currentAccountAddress = accounts[0];

  // Check ownership on the blockchain.
  const web3 = new Web3();
  web3.setProvider(config.blockchainAddress);

  const gameCopyContract = new web3.eth.Contract(abi as any, config.contractAddress);

  let ownerAddress;
  try {
    ownerAddress = await gameCopyContract.methods.ownerOf(id).call();
  } catch (err) {
    console.log(err);
    ownerAddress = "0x0";
  }

  if (ownerAddress.toLowerCase() === currentAccountAddress.toLowerCase()) {
    alert("Success!\n\nGame ownership confirmed!");
    return true;
  } else {
    alert("Error\n\nSorry, you don't own this game.");
    return false;
  }
};
