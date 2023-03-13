const express = require("express");
const router = express.Router();
const { verificar_autenticacion } = require("../middleware/autenticacion");
const { verificar_rol } = require("../middleware/rol_autenticacion");

router.get(
  "/bienestar",
  verificar_autenticacion,
  verificar_rol(["bienestar"]),
  (req, res) => {
    res.status(200).json({
      message: "Bienvenido a la API Bienestar"
    });
  }
);

module.exports = router;
