const express = require("express");
const signinApi = require("../controller/sign_in");
const signoutApi = require("../controller/sign_out");
const verifytokens = require("../controller/verifyTokens");
const router = express.Router();

router.use(signinApi);
router.use(signoutApi);
router.use(verifytokens);

module.exports = router;
