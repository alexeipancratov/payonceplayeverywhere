# Pay Once, Play Everywhere

![hackathon_logo](https://user-images.githubusercontent.com/3188163/171972513-9324040e-33b2-4574-86ef-93cecc2408fd.png)

## Description
dApp which allows purchasing video games and then claim the copy of ownership on any other gaming console by presenting an NFT which confirms that you already bought it for another console/PC.

## Architecture

![Untitled](https://user-images.githubusercontent.com/3188163/172033291-c63ba0d0-42b0-4800-8f7f-38fdbb88500e.png)

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
