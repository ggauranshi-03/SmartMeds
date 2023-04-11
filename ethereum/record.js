// import web3 from "./web3";
// import Record from "../artifacts/contracts/Record.sol/Record.json";

// const instance = new web3.eth.Contract(
//     JSON.parse(Record.interface),
//     "0x06f1611e64439a5a911e35aa8b5cb6b814400482" 
// );

// export default instance;\


const fs = require('fs');
const path = require('path');
// const contractPath = path.join(__dirname, 'path/to/your/contract.json');
const contractPath = `../artifacts/contracts/Record.sol/Record.json`;
const contractJSON = fs.readFileSync(contractPath, 'utf8');
const contract = JSON.parse(contractJSON);

if (!contract.interface) {
  console.error('Error parsing contract ABI: interface is undefined');
}

const contractABI = JSON.parse(contract.interface);
const contractAddress = '0x06f1611e64439a5a911e35aa8b5cb6b814400482'; // Set the address of your deployed contract here

const web3 = new Web3(provider);
const instance = new web3.eth.Contract(contractABI, contractAddress);

export default instance