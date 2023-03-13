const express = require("express");
const router = express.Router();
const { verificar_autenticacion } = require("../middleware/autenticacion");
const { verificar_rol } = require("../middleware/rol_autenticacion");

router.get(
  "/docente",
  verificar_autenticacion,
  verificar_rol(["docente"]),
  (req, res) => {
    res.status(200).json({
      message: "Bienvenido a la API Docente"
    });
  }
);

module.exports = router;
