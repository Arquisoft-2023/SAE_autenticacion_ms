const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { verificar_autenticacion } = require("../middleware/autenticacion");

router.put("/signout", verificar_autenticacion, (req, res) => {
  const authHeader = req.headers["authorization"];
  jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      //res.send({ msg: "Has cerrado sesion correctamente!" });
      res.redirect("/");
    } else {
      res.send({ msg: "Error" });
    }
  });
});

module.exports = router;
