const jwt = require("jsonwebtoken");
require("dotenv").config();

// Creación de TOKEN
const firmar_token = async (usuarioIn) => {
  return jwt.sign(
    {
      usuario_un: usuarioIn
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
