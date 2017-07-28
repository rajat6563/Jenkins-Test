var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Congrats.... we have successfully done Continuous Deployment from Dev Branch to Master Branch");
});

app.listen(4000);