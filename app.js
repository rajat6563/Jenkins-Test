var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World of Jenkins by Rajat");
});

app.listen(4000);