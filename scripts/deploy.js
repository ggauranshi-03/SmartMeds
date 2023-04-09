// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;

//   const lockedAmount = hre.ethers.utils.parseEther("0.001");

//   const Lock = await hre.ethers.getContractFactory("Lock");
//   const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

//   await lock.deployed();

//   console.log(
//     `Lock with ${ethers.utils.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

// const Web3 = require("web3");
// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const contract = require("../artifacts/contracts/Record.sol/Record.json");
// // Infura API endpoint and project ID
// const infuraEndpoint =
//   "https://goerli.infura.io/v3/8a2e33b43a1a477cb35162cd26e5210f";

// // Mnemonic phrase for your wallet
// const mnemonic =
//   "sponsor world rent daughter region fury annual short seminar brush rapid puzzle";

// // Number of accounts to use from the wallet
// const numberOfAccounts = 1;

// // HDWalletProvider instance
// const provider = new HDWalletProvider({
//   mnemonic: {
//     phrase: mnemonic,
//   },
//   providerOrUrl: infuraEndpoint,
// });

// // Web3 instance
// const web3 = new Web3(provider);

// // Contract instance
// const Record = new web3.eth.Contract(contract.abi);

// // Contract deployment parameters
// const _ic = "1234567890";
// const _name = "John Doe";
// const _phone = "+1234567890";
// const _gender = "Male";
// const _dob = "01/01/2000";
// const _height = "175cm";
// const _weight = "70kg";
// const _houseaddr = "123 Main St";
// const _bloodgroup = "O+";
// const _allergies = "N/A";
// const _medication = "N/A";

// // Deploy contract
// (async () => {
//   const accounts = await web3.eth.getAccounts();
//   console.log(`Deploying contract from account ${accounts[0]}`);

//   const result = await Record.deploy({
//     data: contract.bytecode,
//     arguments: [
//       _ic,
//       _name,
//       _phone,
//       _gender,
//       _dob,
//       _height,
//       _weight,
//       _houseaddr,
//       _bloodgroup,
//       _allergies,
//       _medication,
//     ],
//   }).send({
//     from: accounts[0],
//     gas: 5000000,
//     gasPrice: 10000000000,
//   });

//   console.log(`Contract deployed at address ${result.options.address}`);
// })();

const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const contract = require("../artifacts/contracts/Record.sol/Record.json");

// Infura API endpoint and project ID
const infuraEndpoint =
  "https://goerli.infura.io/v3/8a2e33b43a1a477cb35162cd26e5210f";

// Mnemonic phrase for your wallet
const mnemonic =
  "sponsor world rent daughter region fury annual short seminar brush rapid puzzle";

// Number of accounts to use from the wallet
const numberOfAccounts = 1;

// HDWalletProvider instance
const provider = new HDWalletProvider({
  mnemonic: {
    phrase: mnemonic,
  },
  providerOrUrl: infuraEndpoint,
});

// Web3 instance
const web3 = new Web3(provider);

// Contract instance
const Record = new web3.eth.Contract(contract.abi);

// Deploy contract
(async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(`Deploying contract from account ${accounts[0]}`);

  const result = await Record.deploy({
    data: contract.bytecode,
  }).send({
    from: accounts[0],
    gas: 5000000,
    gasPrice: 10000000000,
  });

  console.log(`Contract deployed at address ${result.options.address}`);
})();
