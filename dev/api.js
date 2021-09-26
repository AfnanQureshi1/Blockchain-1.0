
const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World Of blockchain');
})
 
app.listen(3000, function(){
  console.log("this server runs on local port 3000");
});

