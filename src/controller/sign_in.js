const express = require("express");
const router = express.Router();
const { firmar_token } = require("../middleware/manejo_token");

router.post("/signin", async (req, res) => {
  //console.log(req.body);
  if (req.body.usuario_un && req.body.estado === true) {
    data = req.body;
    const token = await firmar_token(data);
    return res.status(200).json({
      usuario_un: req.body.usuario_un,
      estado: req.body.estado,
      token: token
    });
  } else {
    return res.status(404).json({
      message: "Error al ingresar, revise los datos proporcionados."
    });
  }
});

// Ruta de prueba
router.get("/all", async (req, res) => {
  const usuarios = await usuario_model.findAll();
  res.status(200).json(usuarios);
});

module.exports = router;
