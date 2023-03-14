const { verificar_token } = require("./manejo_token");

const verificar_autenticacion = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ").pop();
    const token_data = await verificar_token(token);
    console.log(token_data);

    if (token_data.usuario_un) {
      next();
    } else {
      res.status(400).json({
        message: "Token inválido"
      });
    }
  } catch (e) {
    console.log(e);
    res.status(401).json({
      message: "No autorizado. Redireccionando a inicio...."
    });
  }
};

module.exports = {
  verificar_autenticacion
};
