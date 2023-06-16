const express = require("express");
const signinApi = require("../controller/sign_in");
const signoutApi = require("../controller/sign_out");
const verifytokens = require("../controller/verifyTokens");
const verifyLDAP = require("../controller/verifyGestion");
const router = express.Router();

router.use(signinApi);
router.use(signoutApi);
router.use(verifytokens);
router.use(verifyLDAP);

module.exports = router;
