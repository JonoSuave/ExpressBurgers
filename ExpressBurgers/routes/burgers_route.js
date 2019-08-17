var express = require('express');
var router = express.Router();
var burgers = require('../data/burgers.json');

router.get('/', function(req, res, next) {
  res.render('burgers', burgers);
 });

module.exports = router;