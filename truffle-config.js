/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    "ganache": {
      provider: () => new HDWalletProvider(process.env.MNEMONIC_GANACHE, `http://127.0.0.1:7545`),
      network_id: "5777"
     },
    ropsten: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC_ROPSTEN, `https://ropsten.infura.io/v3/${process.env.INFURA_TOKEN}`),
      network_id: 3
    },
    mainnet: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC_MAINNET, `https://mainnet.infura.io/v3/${process.env.INFURA_TOKEN}`),
      network_id: 1
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
       version: "0.7.0",    // Fetch exact version from solc-bin (default: truffle's version)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "byzantium"
       }
    }
  }
};
