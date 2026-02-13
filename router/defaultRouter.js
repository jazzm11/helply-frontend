const express = require('express');

const router = express.Router();

// Import the controller
const defaultController = require('../controller/defaultController');

// Sample route to get all books
router.get('/', defaultController.homePage);

router.get('/view', defaultController.view);
// Export the router to be used in the server file
module.exports = router;
