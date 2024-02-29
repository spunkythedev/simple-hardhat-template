require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const METAMASK_ACCOUNT = process.env.METAMASK_ACCOUNT;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

module.exports = {
  solidity: {
    compilers: [{ version: "0.8.24" } /*,{ version: "0.6.6" }*/],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"],
      chainId: 31337,
    },
    goerli: {
      url: process.env.GOERLI_RPC,
      accounts: [METAMASK_ACCOUNT],
      chainId: 5,
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC,
      accounts: [METAMASK_ACCOUNT],
      chainId: 11155111,
      blockConfirmations: 6,
    },
  },
  gasReporter: {
    enabled: true,
    // currency: "USD",
    // outputFile: "gas-report.txt",
    // noColors: true,
    // coinmarketcap: COINMARKETCAP_API_KEY,
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
    // customChains: [], // uncomment this line if you are getting a TypeError: customChains is not iterable
  },
  sourcify: {
    enabled: false,
  },
};
