const { create } = require("ipfs-http-client");
const ipfsClient = create("http://127.0.0.1:5001");
module.exports = {
  ipfsClient,
};
