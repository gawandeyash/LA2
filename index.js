var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/image', function(req, res, next) {
  res.render('image');
});

router.get('/admin1', function(req, res, next) {
  res.render('audio');
});

router.get('/document', function(req, res, next) {
  res.render('document');
});

module.exports = router;
