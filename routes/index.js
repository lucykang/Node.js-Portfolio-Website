var express = require('express');
var ejs = require('ejs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'HAE YEON KANG' });
});

/* about me */
router.get('/about', function(req, res, next){
    res.render('pages/about', { title: 'ABOUT ME'});
});

/* portfolio */
router.get('/portfolio', function(req, res, next){
   res.render('pages/portfolio', { title: 'PORTFOLIO'}); 
});

/* services */
router.get('/services', function(req, res, next){
   res.render('pages/services', { title: 'SERVICES'}); 
});

/* contact me */
router.get('/contact', function(req, res, next){
    res.render('pages/contact', { title: 'CONTACT ME'});
});

module.exports = router;
