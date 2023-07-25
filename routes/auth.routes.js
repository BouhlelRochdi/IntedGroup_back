const router = require("express").Router();
const auth = require("../controllers/auth.controller.js");

router.post("/login", auth.login)

module.exports = router;
