const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { verificar_autenticacion } = require("../middleware/autenticacion");

router.put("/signout", (req, res) => {
  const authHeader = req.headers["authorization"];

  // Sobreescribir el token ya existente con un valor "vacio" para asi "eliminar" el token
  // JWT no tiene metodo propio de cerrar sesion
  jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.send({ message: "Has cerrado sesion correctamente!" });
    } else {
      res.send({ message: "Error" });
    }
  });
});

module.exports = router;
