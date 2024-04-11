const { Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database');

class Pago extends Model {}

Pago.init({
  // Tus definiciones de campo aquí
  IDPago: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  IDUsuario: {
    type: DataTypes.INTEGER,
    references: {
      model: 'usuarios', // Nombre de la tabla de usuarios
      key: 'IDUsuario'
    }
  },
  // ...otros campos...
}, {
  sequelize,
  modelName: 'Pago',
  tableName: 'pagos',
  timestamps: false 
});

Pago.findByUserId = async function(userID) {
  return await this.findAll({
    where: { IDUsuario: userID },
    attributes: ['IDPago', 'Cant_pagada', 'Fecha_de_pago', 'Metodo', 'Banco', 'Nota'],
    order: [['Fecha_de_pago', 'ASC']]
  });
};

Pago.associate = function(models) {
  Pago.belongsTo(models.Usuario, { foreignKey: 'IDUsuario', as: 'usuario' });
};


module.exports = Pago;
