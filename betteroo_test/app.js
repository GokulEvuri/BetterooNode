
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');

var app = express();
var mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/upload',routes.index);
app.post('/upload',upping());

app.post('/poll_post', function(req, res) {
    var name = req.body.title,
        color = req.body.disc;
        console.log(name);
        console.log(color);
    // ...
});

app.listen(8040, function(){
	console.log("starting server");
}
);

function upping(){
	console.log("1");
	return function(req,res,next){+
		var img = req.files.photo.image;
		var name = req.body.photo.name || img.name;
		var path = join(dir, img.name);
	console.log("2");
		fs.rename(img.path,path,function(err){
			console.log("3");
			if(err) return next(err);
			Photo.create({
				name:name,
				path:img.name
			}, function (err){
				if (err) return next(err);
				res.redirect('/');
			});
		});
		};
	};
