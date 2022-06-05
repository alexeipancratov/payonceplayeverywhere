# Pay Once, Play Everywhere

![hackathon_logo](https://user-images.githubusercontent.com/3188163/171972513-9324040e-33b2-4574-86ef-93cecc2408fd.png)
![Screenshot 2022-06-05 091205](https://user-images.githubusercontent.com/3188163/172052150-41c7af45-862e-443d-9a34-f72908196c96.jpg)

## Description
dApp which allows purchasing of video games and then claiming the copy of ownership on any other game store/platform by presenting an NFT which confirms that a user has already bought it at another game store or gaming platform.

DEMO - https://www.youtube.com/watch?v=KcsA_IfsZOs

### Advantages for gamers
- Save money by paying for a game only once
- Play the games you own on any other platform/console (they have been released on)

### Advantages for game stores
- Gamers will be more willing to pay for licensed games knowing they are not restricted by current platform only
- Gamers can still be charged a small portion of the full price for claiming a copy on another platform
- Game copy ownership verification across different stores/platforms becomes possible and super easy

## Architecture

![Untitled (1)](https://user-images.githubusercontent.com/3188163/172033374-b72b0a14-4f96-46aa-b830-d5a8e166a5a7.png)

The UI and API parts should be replicated for each game store separately, while the smart contract should be shared across them.

## How game stores can manage the shared NFT smart contract?

Different game stores accross the industry can form a DAO which would allow them to have their addresses having access to the minting functionality of the NFT smart contract. They can also make collective decisions regarding its future development.

![Untitled (2)](https://user-images.githubusercontent.com/3188163/172034055-e73e5e29-ac4a-43ba-8f40-33867474b5ec.png)

## How to run project
_Frontend_

```
cd frontend
npm install
npm start
```

http://localhost:3000/

_Backend_

`cd backend`

create a secret.json file with your eth private key with the following content

```
{
  "privateKey": "<INSERT-PRIVATE-KEY>"
}
```

```
npm install
npm start
```

_Smart Contracts_

```
cd contracts
npm install
npx hardhat node
```

Open a second terminal

```
npx hardhat run scripts/deploy.js --network localhost
```
