const express = require("express");
const signinApi = require("../controller/sign_in");
const signoutApi = require("../controller/sign_out");
const router = express.Router();

router.use(signinApi);
router.use(signoutApi);

module.exports = router;
