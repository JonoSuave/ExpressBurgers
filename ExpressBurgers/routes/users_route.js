var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');
/* GET users listing. */
router.get('/', userController.listUsers);
router.get('/:paramsId', userController.userDetails);
router.put('/:id/update', userController.updateUser);
router.post('/add', userController.addUser);

module.exports = router;
