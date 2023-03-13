const { DataTypes } = require("sequelize");
const sequelize = require("../config/base_datos");

const usuario = sequelize.define(
  "usuario",
  {
    usuario_un: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    nombres: {
      type: DataTypes.STRING,
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING,
      allowNull: false
    },
    documento: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo_documento: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  }
);

//usuario.hasOne(role)
//rol.hasMany(usuario)

module.exports = usuario;
