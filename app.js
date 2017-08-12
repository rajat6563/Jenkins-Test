var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Jenkins World Rajat ");
});

app.listen(3000);