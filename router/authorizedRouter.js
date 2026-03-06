const router = require("express").Router()
const {authenticate, authorizeAdmin}= require("../middleware/auth_user.js")
const controller = require("../controller/authorizedController")

router.get("/admin/",authenticate,authorizeAdmin, controller.adminPage)
router.get("/profile/", controller.profilePage)

module.exports = router