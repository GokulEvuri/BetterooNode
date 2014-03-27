// Author: Gokul Sai Evuri (gokul@betteroo.com)

var express = require("express");
var app = express();
var AWS = require('aws-sdk');


//**
// AWS Configuring
//**//
AWS.config.loadFromPath('./config.json');

// Creating object for dynamoDB
var dynamodb = new AWS.DynamoDB();
// AWS Config. END

app.use(express.logger('dev'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(app.router);
// assuming POST: name=foo&color=red            <-- URL encoding
//
// or       POST: {"name":"foo","color":"red"}  <-- JSON encoding

app.post('/register', function(req, res) {
    console.log(req.body.name);
    console.log(req.body.color); 
});

app.listen(8090, function () {
  console.log("starting server");
});
