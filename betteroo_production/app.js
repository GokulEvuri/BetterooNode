// Author: Gokul Sai Evuri (gokul@betteroo.com)

var express = require("express");
var app = express();
var AWS = require('aws-sdk');

var mustacheExpress = require('mustache-express');

//**
// AWS Configuring
//**//
AWS.config.loadFromPath('./config.json');

	// Creating object for dynamoDB
var dynamodb = new AWS.DynamoDB();
// AWS Config. END


// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use("/tools", express.static(__dirname + '/tools'));
app.use("/images", express.static(__dirname + '/images'));

app.get("/", function (req, res) {
  res.render('index');
});

app.get("/login", function (req, res) {
  res.render('login');
});

app.get("/register", function (req, res) {
  res.render('register');
});

app.post('/login', function(req, res) {
	console.log(req.post);
	res.end();
	//console.log(req.body.username);
    //console.log(req.body.pwd);	

	//lib_api.login(req.body.username,req.body.pass_hash,dynamodb,res);
});

app.post('/register', function(req, res) {
//	lib_api.register_user(req.body.username,);
    console.log(req.body.name);
    console.log(req.body.color); 
});

app.listen(8090, function () {
  console.log("starting server");
});