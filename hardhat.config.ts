import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import { task, HardhatUserConfig } from "hardhat/config";
import "solidity-coverage";
import "@typechain/hardhat";
import "@nomicfoundation/hardhat-ethers";
// import("@nomiclabs/hardhat-waffle");
import "./tasks/block-number";
import { config as dotenvConfig } from "dotenv";

dotenvConfig({ path: ".env", quiet: true });

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "";
const SEPOLIA_RPC_URL =
    process.env.SEPOLIA_RPC_URL ||
    "https://eth-sepolia.g.alchemy.com/v2/Un0UPdFBnNy0Hd0UdiTNT";
const PRIVATE_KEY = process.env.PRIVATE_KEY || "";
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "";

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {},
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 11155111,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
        },
    },
    solidity: "0.8.28",
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
        etherscan: ETHERSCAN_API_KEY,
    },
};

export default config;
