const express = require("express");
const usuario_model = require("../models/usuario");
const router = express.Router();
const { firmar_token } = require("../middleware/manejo_token");

router.post("/signin", async (req, res) => {
  const usuario_un_in = req.body.usuario_un;

  if (usuario_un_in === "") {
    return res.status(404).json({
      message: "Ningun valor fue ingresado"
    });
  } else {
    const usuario_find = await usuario_model.findOne({
      where: {
        usuario_un: usuario_un_in,
        estado: true
      }
    });

    // Si usuario_un no existe
    if (!usuario_find) {
      return res.status(404).json({
        message: "Usuario no encontrado"
      });
    }

    const token = await firmar_token(usuario_find);

    res.status(200).json({
      message: `Bienvenido(a) ${usuario_find.usuario_un}!`,
      usuario: usuario_find,
      token: token
    });
  }
});

// Ruta de prueba
router.get("/all", async (req, res) => {
  const usuarios = await usuario_model.findAll();
  res.status(200).json(usuarios);
});

module.exports = router;
