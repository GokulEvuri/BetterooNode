var express = require("express");
var app = express();

var mustacheExpress = require('mustache-express');

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

app.listen(8090, function () {
  console.log("starting server");
});
