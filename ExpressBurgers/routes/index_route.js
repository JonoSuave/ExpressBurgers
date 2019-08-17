var express = require('express');
var router = express.Router();
const userController = require('../controllers/user.controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Logic for if user is logged in to capture info to show chart/info needed on page
  // Get object with property names being the five available questions users choose from on sign up. Value is the count of how many times that questions has been selected.
  userController.questionCount().then((count) => {
    res.render('index', { title: 'Express Burgers', count: count });
  });

});

module.exports = router;




// Requirements:
// All pages are generated dynamically using Express and Pug
// All data is stored in MongoDB (use mongoose)
// Nothing should break if there is no data in the database
// You may only use the packages discussed in class demos or in this document
// Users can create an account that stores username, password, user-level (regular user or admin), email, age, and the answers to three multiple choice questions that you come up with.
// Passwords must be salted and hashed (use bcrypt-nodejs)
// On the home page, show bar charts for each of the multiple choice questions that shows how many people selected each answer.
// The charts should be able to handle a number between 0-10 for each answer
// Create an admin account (user:admin, password:pass) along with several regular user accounts so I can see the data.
// Have a page that only the admin can see that shows a table listing all of the people and their data and give the ability to delete user accounts.
// When someone is logged in, a session should be used to maintain that login status (use express-sessions)
// If user is logged in, give them the ability to edit/update their information
// Should have a logout button that destroys the session and removes the ability to modify records
// Store a cookie containing the last time you visited the page and display that information on the page (use cookie-parser)