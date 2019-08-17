var express = require('express');
var router = express.Router();
var shakes = require('../data/shakes.json');

router.get('/', function(req, res, next) {
  res.render('shakes', shakes);
 });

module.exports = router;