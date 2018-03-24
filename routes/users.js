var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { //"/" is relative to this directory (try modifying this pls)
  res.send('respond with a resource');
});

/* GET users/cool */
router.get('/cool', function(req, res, next) {
  res.send('Youre so cool');
});

module.exports = router;


