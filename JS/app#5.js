var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/633304bc08db4a8f81dce365f6aeaf93')

const account1 = '0x36C4d2DbDaA93c55C3942EB542DD2DF0c2Bfd53f'
//'0x95d5979912ece372e0840dd1e07d755b5a9639945f197966d18961012ae006ba'
const account2 = '0x5338C1C4A0cdD06BEE90377334Fd5Af0DD928f69'
//'0x8c588ed510e3b95704f00a8d60892207eff0408c559caacbe7e313c833bc7453'

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')

const contractAddress = "0x5f5Fd4764Da8Ae81d133B8A4e5B20981d6A0376e";
const contractABI = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "standard",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ name: "success", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }, { name: "", type: "address" }],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ name: "_initialSupply", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_from", type: "address" },
      { indexed: true, name: "_to", type: "address" },
      { indexed: false, name: "_value", type: "uint256" }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_owner", type: "address" },
      { indexed: true, name: "_spender", type: "address" },
      { indexed: false, name: "_value", type: "uint256" }
    ],
    name: "Approval",
    type: "event"
  }
];
const contract = new web3.eth.Contract(contractABI, contractAddress);
const data = contract.methods.transfer(account2, 1000).encodeABI();

// Check Tokem balance for account2
contract.methods.balanceOf(account2).call((err, balance) => {
    console.log({ err, balance });
  });

// web3.eth.getBalance(account1, (err, bal) => {
//   console.log("account 1 balance: ", web3.utils.fromWei(bal, "ether"));
// });
// web3.eth.getBalance(account2, (err, bal) => {
//   console.log("account 2 balance: ", web3.utils.fromWei(bal, "ether"));
// });

// console.log(data);

// web3.eth.getTransactionCount(account1, (err, txCount) => {
//   // Create transaction object
//   const txObject = {
//     nonce: web3.utils.toHex(txCount),
//     gasLimit: web3.utils.toHex(800000),
//     gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
//     to: contractAddress,
//     data: data
//   };

//   // Sign the transaction
//   const tx = new Tx(txObject);
//   tx.sign(privateKey1);

//   const serializedTx = tx.serialize();
//   const raw = "0x" + serializedTx.toString("hex");

//   // Broadcast the transaction
//   web3.eth.sendSignedTransaction(raw, (err, txHash) => {
//     console.log("err: ", err, "txHash: ", txHash);
//   });
// });

