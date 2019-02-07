var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/633304bc08db4a8f81dce365f6aeaf93')

const account1 = '0x36C4d2DbDaA93c55C3942EB542DD2DF0c2Bfd53f'
//'0x95d5979912ece372e0840dd1e07d755b5a9639945f197966d18961012ae006ba'
const account2 = '0x5338C1C4A0cdD06BEE90377334Fd5Af0DD928f69'
//'0x8c588ed510e3b95704f00a8d60892207eff0408c559caacbe7e313c833bc7453'

//For create accounts
//console.log(web3.eth.accounts.create())
//console.log(web3.eth.accounts.create())

//For Save your private key
//export PRIVATE_KEY_1='yourprivatekey'

//For show your private key
// console.log(process.env.PRIVATE_KEY_1)
// console.log(process.env.PRIVATE_KEY_2)

const privateKey1 = Buffer.from(process.env.PRIVATE_KEY_1, 'hex')
const privateKey2 = Buffer.from(process.env.PRIVATE_KEY_2, 'hex')

// Get Balance of each account
web3.eth.getBalance(account1, (err,bal) => {
    console.log('account 1 balance: ',web3.utils.fromWei(bal,'ether'));  
})

web3.eth.getBalance(account2, (err,bal) => {
    console.log('account 2 balance: ',web3.utils.fromWei(bal,'ether'));  
})

// web3.eth.getTransactionCount(account1, (err, txCount) => {
//     // Build the transaction
//     const txObject = {
//         nonce: web3.utils.toHex(txCount),
//         to: account2,
//         value: web3.utils.toHex(web3.utils.toWei('1','ether')),
//         gasLimit: web3.utils.toHex(21000),
//         gasPrice: web3.utils.toHex(web3.utils.toWei('10','gwei')) 
//     }
    
//     // Sign the transaction
//     const tx = new Tx(txObject)
//     tx.sign(privateKey1)

//     const serializedTransaction = tx.serialize()
//     const raw = '0x' + serializedTransaction.toString('hex')

//     // Broadcast the transaction
//     web3.eth.sendSignedTransaction(raw, (err,txHash) => {
//         console.log('txHash: ', txHash);
    
//     })
// })

