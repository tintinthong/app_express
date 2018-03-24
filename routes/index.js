var express = require('express');
var router = express.Router();

//* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });  //jade view, { data to inject}
//});


// GET home page. New route
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

//router functiosn are express middleware
//so they need to either respond to request or call next function
//https://expressjs.com/en/guide/routing.html#response-methods otger response metho

module.exports = router;
