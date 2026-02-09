const express = require('express');

const router = express.Router();

// Import the controller
const defaultController = require('../controller/defaultController');

// Sample route to get all books
router.get('/', defaultController.homePage);

router.get('/login', defaultController.login);
router.get('/signup', defaultController.signup);
// Export the router to be used in the server file
module.exports = router;
