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

app.listen(8000, function () {
  console.log("starting server");
});
