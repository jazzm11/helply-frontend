const express = require("express");

const router = express.Router();

// Import the controller
const defaultController = require("../controller/defaultController");

// Sample route to get all books
router.get("/", defaultController.homePage);

// Profile page router - flytt dette hvis vi lager en controlleren for profile siden
router.get("/profile", defaultController.profilePage);

// Export the router to be used in the server file
module.exports = router;
