const HDWalletProvider = require("truffle-hdwallet-provider");
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();
const infuraKey = fs.readFileSync(".infura").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },

    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${infuraKey}`
        ),
      network_id: 4, // rinkeby's id
      gas: 4500000, // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000,
    },

  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.4.24", // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};

