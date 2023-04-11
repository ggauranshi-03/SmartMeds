import web3 from "./web3";
import Record from "../artifacts/contracts/Record.sol/Record.json";

const instance = new web3.eth.Contract(
    JSON.parse(Record.interface),
    "0x06f1611e64439a5a911e35aa8b5cb6b814400482" 
);

export default instance;