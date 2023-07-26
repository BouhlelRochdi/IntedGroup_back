const router = require("express").Router();
const auth = require("../controllers/auth.controller.js");
const { checkToken } = require("../middlewares/checkToken.middleware.js");

router.post("/signin", auth.signin)
router.post("/signup", auth.signup)
router.get("/current-user", checkToken, auth.getCurrentUser)

module.exports = router;
