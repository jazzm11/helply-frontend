const router = require("express").Router()

const controller = require("../controller/authorizedController")

router.get("/admin/:name", controller.adminPage)
router.get("/profile/:name", controller.profilePage)

module.exports = router