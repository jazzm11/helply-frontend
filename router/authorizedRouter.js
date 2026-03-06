const router = require("express").Router()

const controller = require("../controller/authorizedController")

router.get("/admin/", controller.adminPage)
router.get("/profile/", controller.profilePage)

module.exports = router