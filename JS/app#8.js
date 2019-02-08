const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/633304bc08db4a8f81dce365f6aeaf93')

// web3.eth.getGasPrice().then((result) => {
//     console.log(web3.utils.fromWei(result,'ether'));   
// })
// console.log(web3.utils.sha3('Dapp University'))

// console.log(web3.utils.keccak256('Dapp University'));

const _ = web3.utils._
_.each({ key1: 'value1', key2: 'value2'}, (value,key) => {
    console.log(key);   
})