require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };
module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {},
    sharduem: {
      url: "https://api.shardedum.org",
      accounts: [
        "24d0e740d47946d4bc90d3b34d4e2e15703d25a9cefdc10d5b9874558b026767",
      ],
    },
  },
};

