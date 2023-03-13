const { verificar_token } = require("../services/manejo_token");
const modelo_usuario = require("../models/usuario");

const verificar_rol = (roles) => async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ").pop();
    const token_data = await verificar_token(token);
    const usuario_data = await modelo_usuario.findByPk(token_data.usuario_un);

    if ([].concat(roles).includes(usuario_data.rol)) {
      next();
    } else {
      res.status(401).json({ message: "No tienes permisos para acceder" });
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  verificar_rol
};
