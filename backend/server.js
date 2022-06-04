const express = require("express");
const cors = require("cors");
const app = express();
const config = require("./config.json");
const secret = require("./secret.json");
const fs = require("fs");
const Web3 = require("web3");
const Ipfs = require("./ipfs");

app.use(cors());
app.use(express.json());

async function uploadReceiptToIpfs(playerAddress, receipt) {
  try {
    const addResult = await Ipfs.ipfsClient.add(JSON.stringify(receipt, null, 2));
    console.log("Uploaded receipt", addResult.cid);

    return addResult.cid;
  } catch (err) {
    console.log("Failed to upload file to the IPFS", err);
    throw err;
  }
}

async function mintGameCopyNft(playerAddress, ipfsCid) {
  try {
    const web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider(config.blockchainAddress));

    const abi = JSON.parse(fs.readFileSync("abi.json", "utf8"));
    const gameCopyContract = new web3.eth.Contract(abi, config.contractAddress);

    const tokenUri = `https://ipfs.io/ipfs/${ipfsCid}`;
    const tx = gameCopyContract.methods.buyGameCopy(playerAddress, tokenUri);
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

    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log(`Transaction hash: ${receipt.transactionHash}`);

    return tokenUri;
  } catch (err) {
    console.error("Failed to mint game copy NFT.", err);
    throw err;
  }
}

app.post("/gamePurchases", async (req, res) => {
  try {
    const playerAddress = req.body.player;
    const gameCopyReceipt = req.body.receipt;
    const ipfsCid = await uploadReceiptToIpfs(playerAddress, gameCopyReceipt);
    const tokenUri = await mintGameCopyNft(playerAddress, ipfsCid);

    res.status(200);
    res.send({
      tokenUri,
    });
  } catch (err) {
    res.status(400);
    res.send(err.message);
  }
});

app.listen(config.serverPort, () => {
  console.log(`App listening on port ${config.serverPort}`);
});
