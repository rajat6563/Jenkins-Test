var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World by Rajat Yadav");
});

app.listen(4000);