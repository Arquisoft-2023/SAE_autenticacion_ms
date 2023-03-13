const jwt = require("jsonwebtoken");
require("dotenv").config();

// Creación de TOKEN
const firmar_token = async (usuario) => {
  return jwt.sign(
    {
      usuario_un: usuario.usuario_un,
      rol: usuario.rol
    },
    process.env.JWT_SECRET,
    { expiresIn: "1m" }
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
