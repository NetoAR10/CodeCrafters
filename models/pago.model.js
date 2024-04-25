const { Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database'); 
const { decodeBase64 } = require('bcryptjs');
const db = require('../util/database');

class Pago extends Model {}

module.exports = class Pago {

    getAttributes(correo){
      return db.execute(
        `SELECT IDPago, U.IDusuario, IDDeuda, Cant_pagada, Fecha_de_pago, Metodo, Banco, Nota, Prorroga, U.Correo_electronico
        FROM Pago P, Usuario U
        WHERE U.IDusuario = P.IDUsuario
        AND U.Correo_electronico = ?`,
      [correo]);
    }
};


Pago.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  
}, {
  sequelize,
  modelName: 'Pago',
  tableName: 'pagos',
  timestamps: false 
});

