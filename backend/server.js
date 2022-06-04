const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./config.json");
const secret = require("./secret.json");
const fs = require("fs");
const Web3 = require("web3");

app.use(cors());
app.use(express.json());

app.post("/gamePurchases", async (req, res) => {
  // Mint game copy NFT.
  const web3 = new Web3();
  web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));

  const abi = JSON.parse(fs.readFileSync("abi.json", "utf8"));
  const gameCopyContract = new web3.eth.Contract(abi, config.contractAddress);

  const tx = gameCopyContract.methods.buyGameCopy(
    req.body.player,
    "https://ipfs.io/ipfs/QmP535DzTS9ALkDfwA6rcASMmnoB1w3HysRbBktx6Y6osY"
  );
  const gas = await tx.estimateGas({ from: config.fromAddress });
  const gasPrice = await web3.eth.getGasPrice();
  const data = tx.encodeABI();

  const signedTx = await web3.eth.accounts.signTransaction(
    {
      to: gameCopyContract.options.address,
      data,
      gas,
      gasPrice,
      data,
    },
    secret.privateKey
  );

  try {
    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );
    console.log(`Transaction hash: ${receipt.transactionHash}`);
    res.sendStatus(200);
  } catch (e) {
    console.error("An error has occurred.", e);
    res.sendStatus(400);
  }
});

app.listen(config.serverPort, () => {
  console.log(`Example app listening at http://localhost:${config.serverPort}`);
});
