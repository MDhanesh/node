const express = require("express");
const register = require("../modules/registerModule");
const router = express.Router();

router.post("/signup", register.singup);
router.post("/signin", register.singin);

module.exports = router;
