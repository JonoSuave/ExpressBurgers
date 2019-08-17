var express = require('express');
var router = express.Router();
var fries = require('../data/fries.json');

router.get('/', function(req, res, next) {
  res.render('fries', fries);
 });

module.exports = router;