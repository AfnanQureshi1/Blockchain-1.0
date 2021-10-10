
const express = require('express');
const app = express();
const Blockchain = require('./blockchain');
const bodyParser = require ('body-parser');
const  {v4 :  uuidv4}  = require('uuid'); // it will generate random string for us.. which we will use for uniquely identifying miner address for now 

const nodeAddress = uuidv4().split('-').join(''); // to cut off the dashes(-) that uuid in general puts between strings just to be clear with strings

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.get('/blockchainDemo', function (req, res) {
  res.send('Hello World Of blockchain of believers');
})
 // this will give us a complete blockchain
app.get('/blockchain', function (req, res) {
  res.send(bitcoin);
})
//this is for creating a new transaction 
app.post('/transaction', function (req, res) {
  const blockIndex =  bitcoin.createNewTransaction(req.body.amount , req.body.sender , req.body.recipient);
  res.json({note : `this transaction will be saved in block ${blockIndex}`});  
});

//mine a NEw Block
app.get('/mine',function(req, res){
 
  const lastBlock = bitcoin.getLastBlock(); 
  const previosBlockHash = lastBlock['hash']; // to get previous block hash taking one property 

  const currentBlockData = {
    transaction : bitcoin.pendingTransactions,
    index : lastBlock['index'] +1 ,
  }

  const nonce = bitcoin.proofOfWork(previosBlockHash, currentBlockData);

  const blockHash = bitcoin.hashBlock(previosBlockHash, currentBlockData, nonce); 
  //transaction for miner reward
  bitcoin.createNewTransaction(6.5 , "000000000" , nodeAddress ) //nodeaddress is the miner address "MinerADRESSSSSSSShouldBeUnique so use uuid
  
  const newBlock = bitcoin.CreateNewBlock(nonce, previosBlockHash , blockHash);

  res.json({
    note : "New Block Mined Successfully ! ! !",
    block : newBlock,

  });
});

// a simple web wallet 
 app.get('/wallet', function (req, res) {
  res.sendFile(__dirname + "/index.html")

})

app.post('/wallet', function (req, res) {
  const blockIndex =  bitcoin.createNewTransaction(req.body.amount , req.body.senderAddress , req.body.recipientAddress);
  res.json({note : `this transaction will be saved in block ${blockIndex}`});  
});


app.listen(3000, function(){
  console.log("this server runs on local port 3000");
});

