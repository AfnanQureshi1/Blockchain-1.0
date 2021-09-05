const sha256 = require('sha256');


function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];

    this.CreateNewBlock(100 , 'dummygenesisblockhash1226545dskdsl0', '0'); //genesis block

}

Blockchain.prototype.CreateNewBlock = function(nonce , prevBlockHash , hash ) {
    const newBlock = {
        index : this.chain.length +1 ,
        timestamp : Date.now() ,
        transactions : this.pendingTransactions ,
        nonce : nonce ,
        prevBlockHash : prevBlockHash ,
        hash : hash , 


    };
    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;

}

Blockchain.prototype.getLastBlock = function(){ // to get  and fetch the information of the previous block

    return this.chain[this.chain.length-1];
}

Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
const NewTransaction = {
    amount : amount ,
    sender : sender ,
    recipient : recipient ,

}
this.pendingTransactions.push(NewTransaction);
return this.getLastBlock()['index'] +1;
}

Blockchain.prototype.hashBlock = function (prevoiusBlockHash, currentBlockData , nonce){
const dataAsString = prevoiusBlockHash + nonce.toString()  + JSON.stringify(currentBlockData);
const hash = sha256(dataAsString);
return hash;
}

Blockchain.prototype.proofOfWork = function (prevBlockHash, currentBlockData){
    let nonce = 0;
    let hash = this.hashBlock(prevBlockHash, currentBlockData, nonce);

    while(hash.substring(0,4) != '0000' )
    {
        nonce++;
        hash = this.hashBlock(prevBlockHash,currentBlockData,nonce);
       // console.log(hash); // to see the hash and verify the condition that is to be met 
    }
    return nonce; // will show the number of times the program ran before meeting the condition
}


module.exports = Blockchain ;
