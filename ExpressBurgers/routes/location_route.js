var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('location', {
      title: 'Come visit the birthplace of food greatness',
      storeName: 'Express Burgers',
      streetAddress: '196 W 200 N',
      cityStateZip: 'American Fork, UT 89102'});
 });

module.exports = router;