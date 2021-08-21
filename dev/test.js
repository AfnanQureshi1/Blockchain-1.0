const Blockchain  = require('./blockchain');
var bitcoin = new Blockchain();
/*
bitcoin.CreateNewBlock(123 , 'jfifgjfijgf' , 'fefeofekfeofke');

bitcoin.CreateNewBlock(124 , 'jfasasifgjfijgf' , 'fefeofekfecddofke');


bitcoin.createNewTransaction(100, 'senderadressss' , 'recipientaddressss');

bitcoin.createNewTransaction(50, 'senderadresssstwo' , 'recipientaddresssstwo');

bitcoin.createNewTransaction(10, 'senderadressssthree' , 'recipientaddressssthree');


bitcoin.CreateNewBlock(125 , 'jcsscsfasasifgjfijgf' , 'faaefeofekfecddofke');

console.log(bitcoin);
console.log(bitcoin.chain[2]);
*/

const prevBlockHash = 'okeodkedoekkddodkcod';
const CurrentBlockData = [
    {
        sender   : 'asbsdnbsdjsds' ,
        reciever : 'sjkdhsdaldsja' , 
        amount   : 100
},
{
      sender : 'ewopieeiewpow',
      reciever : 'uiorruordir' ,
      amount : 20
}
]
const nonce = 123456;

console.log(bitcoin.hashBlock(prevBlockHash ,CurrentBlockData , nonce )) ;
