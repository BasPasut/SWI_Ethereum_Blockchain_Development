const Web3 = require('web3')
const web3 = new Web3('https://mainnet.infura.io/v3/633304bc08db4a8f81dce365f6aeaf93')

//web3.eth.getBlockNumber().then(console.log)

// web3.eth.getBlock('latest').then((block) => {
//     console.log({
//         blockHash: block.hash,
//         blockNumber: block.number,
//     });
// })

// web3.eth.getBlockNumber().then((latest) => {
//     for(let i = 0 ; i< 10; i++){
//         web3.eth.getBlock(latest-i).then((block) =>{
//             console.log(block.hash);           
//         })
//     }
// })

//web3.eth.getBlockTransactionCount('latest').then(console.log)

// web3.eth.getBlock('latest').then((b) => {
//     console.log(b.hash);
    
// })

const hash = '0x1118986c9ccba3734be790ad3790feba2c1a9c7d729e6414f2aeee75b1a08cd8'
web3.eth.getTransactionFromBlock(hash, 2).then(console.log)