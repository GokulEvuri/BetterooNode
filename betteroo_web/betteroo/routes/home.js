
/*
 * GET home page.
 */

exports.home = function(req, res){
  res.render('home', { title: 'Home Page' });
};