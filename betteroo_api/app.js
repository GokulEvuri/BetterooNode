// Author: Gokul Sai Evuri (gokul@betteroo.com)

var express = require('express');
var app = express();
var AWS = require('aws-sdk');
var lib_api = require('./lib/betteroo_api');

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

app.post('/login', function(req, res) {
	var skjds = lib_api.login(req.body.username,req.body.pass_hash,dynamodb,res);
	//console.log(skjds);
	//res.json(skjds);
});


app.listen(8090, function () {
  console.log("starting server");
});
