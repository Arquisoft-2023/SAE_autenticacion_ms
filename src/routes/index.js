const express = require("express");
const signinApi = require("../controller/sign_in");
const estudianteApi = require("../controller/estudiante");
const docenteApi = require("../controller/docente");
const bienestarApi = require("../controller/bienestar");
const signoutApi = require("../controller/sign_out");
const router = express.Router();

router.use(signinApi);
router.use(signoutApi);
router.use(estudianteApi);
router.use(docenteApi);
router.use(bienestarApi);

module.exports = router;
