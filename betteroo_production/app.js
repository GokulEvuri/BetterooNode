// Author: Gokul Sai Evuri (gokul@betteroo.com)

//var express = require("express");
//var app = express();
var AWS = require('aws-sdk');

//var mustacheExpress = require('mustache-express');

//**
// AWS Configuring
//**//
AWS.config.loadFromPath('./config.json');

	// Creating object for dynamoDB
var dynamodb = new AWS.DynamoDB();
// AWS Config. END


// Register '.mustache' extension with The Mustache Express
//app.engine('mustache', mustacheExpress());

//app.set('view engine', 'mustache');
//app.set('views', __dirname + '/views');

//app.use("/tools", express.static(__dirname + '/tools'));
//app.use("/images", express.static(__dirname + '/images'));

//app.get("/", function (req, res) {
//  res.render('index');
//});
//app.get("/login", function (req, res) {
//  res.render('login');
//});
//app.get("/register", function (req, res) {
//  res.render('register');
//});

//app.listen(8090, function () {
//  console.log("starting server");
//});

var item = {
	"id":{"N":1234},
	"title":{"S":"FooBar"}

}

dynamodb.putItem({TableName: 'log_dev', Item: item}, function(err, data){
    if (err) {
    console.log(err); // an error occurred
    } else {
    console.log(data); // successful response
    }
});