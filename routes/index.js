var express = require('express');
var ejs = require('ejs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'HAE YEON KANG' });
  //res.render('pages/index');
});

module.exports = router;
