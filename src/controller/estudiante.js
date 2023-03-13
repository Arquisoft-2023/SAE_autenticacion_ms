const express = require("express");
const router = express.Router();
const { verificar_autenticacion } = require("../middleware/autenticacion");
const { verificar_rol } = require("../middleware/rol_autenticacion");

router.get(
  "/estudiante",
  verificar_autenticacion,
  verificar_rol(["estudiante"]),
  (req, res) => {
    res.status(200).json({
      message: "Bienvenido a la API Estudiante"
    });
  }
);

module.exports = router;
