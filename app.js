var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World Jenkins");
});

app.listen(4000);