const sha256 = require('sha256');


function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];

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

module.exports = Blockchain ;