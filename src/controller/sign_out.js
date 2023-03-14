const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { verificar_autenticacion } = require("../middleware/autenticacion");

router.put("/signout", verificar_autenticacion, (req, res) => {
  //Obtenemos el token actual que se encuentra en el header
  const authHeader = req.headers["authorization"];

  // Sobreescribir el token ya existente con un valor "vacio" para asi "eliminar" el token
  // JWT no tiene metodo propio de cerrar sesion
  jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.send({ msg: "Has cerrado sesion correctamente!" });
    } else {
      res.send({ msg: "Error" });
    }
  });
});

module.exports = router;
