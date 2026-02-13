const router = require("express").Router()

const controller = require("../controller/authController")

router.get("/signin",controller.sign_in_render)
router.get("/signup", controller.sign_up_render)

module.exports = router