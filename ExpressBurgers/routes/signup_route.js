var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', function(req, res, next) {
    res.render('signup', { greeting: 'Hello Puppet' });  
});

module.exports = router;