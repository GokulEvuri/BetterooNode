// Author: Gokul Sai Evuri (gokul@betteroo.com)

var express = require('express');
var app = express();
var AWS = require('aws-sdk');
var lib_api = require('./lib/betteroo_api');
var mustacheExpress = require('mustache-express');

//**
// AWS Configuring
//**//
AWS.config.loadFromPath('./config.json');

// Creating object for dynamoDB
var dynamodb = new AWS.DynamoDB();
var S3 = new AWS.S3();
// AWS Config. END

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.logger('dev'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(app.router);
// assuming POST: name=foo&color=red            <-- URL encoding
//
// or       POST: {"name":"foo","color":"red"}  <-- JSON encoding

app.post('/register', function(req, res) {
//	lib_api.register_user(req.body.username,);
    console.log(req.body.name);
    console.log(req.body.color); 
});

app.post('/login', function(req, res) {
	lib_api.login(req.body.username,req.body.pass_hash,dynamodb,res);
	//console.log(skjds);
	//res.json(skjds);
});

app.get('/login',function(req,res){
	res.render('login');
})

app.post('/create_poll',function(req,res){
	lib_api.create_poll(req.body.question, req.body.option1,req.body.option2, dynamodb, res);
});

app.post('map_distribution',function(req,res){
	lib_api.login(req.body.post_id, dynamodb, res);
});

app.post('map_distribution',function(req,res){
	lib_api.login(req.body.post_id, dynamodb, res);
});



app.listen(8090, function () {
  console.log("starting server");
});
