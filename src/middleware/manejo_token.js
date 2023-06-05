const jwt = require("jsonwebtoken");
require("dotenv").config();

// Creación de TOKEN
const firmar_token = async (usuario) => {
  return jwt.sign(
    {
      usuario_un: usuario.usuario_un,
      estado: usuario.estado,
      rol: usuario.rol
    },
    process.env.JWT_SECRET,
    { expiresIn: "10m" } // Tiempo de expiración del token
  );
};

// Verificación de TOKEN
const verificar_token = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return console.error(e);
  }
};

module.exports = {
  firmar_token,
  verificar_token
};
