var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World of Jenkins and test case run by Rajat Yv");
});

app.listen(4000);