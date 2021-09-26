
const express = require('express');
const app = express();
 
app.get('/blockchainDemo', function (req, res) {
  res.send('Hello World Of blockchain of believers');
})
 
app.get('/blockchain', function (req, res) {
  res.send('Here we will show our complete blockchain');
})

app.post('/transaction', function (req, res) {
  res.send('Here we will call our create new transaction method from our blockchain dataStructure');

})

app.listen(3000, function(){
  console.log("this server runs on local port 3000");
});

