const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { verificar_autenticacion } = require("../middleware/autenticacion");

router.put("/signout", (req, res) => {
  const authHeader = req.headers["authorization"];

  jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.send({ message: "Has cerrado sesion correctamente!" });
    } else {
      res.send({ message: "Error" });
    }
  });
});

module.exports = router;
