import axios from "axios";

declare let window: any;

const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND;
const GAMES_ROUTE = BACKEND_BASE_URL + "/gamePurchases";

export const createGame = (name: string) => {
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

  axios.post(GAMES_ROUTE, payload);
};
