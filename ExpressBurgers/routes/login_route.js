var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

// router.get('/', function(req, res, next) {
//     res.render('login', { greeting: 'Hello Puppet' });  
// });
router.get('/', userController.listUsers);


module.exports = router;