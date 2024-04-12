const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Pago extends Model {}

Pago.init({
  IDPago: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  IDUsuario: DataTypes.INTEGER,
  IDDeuda: DataTypes.INTEGER,
  Cant_pagada: DataTypes.FLOAT,
  Fecha_de_pago: DataTypes.DATEONLY,
  Metodo: DataTypes.STRING,
  Banco: DataTypes.STRING,
  Nota: DataTypes.STRING
}, { sequelize, modelName: 'pago', tableName: 'pago', timestamps: false });

module.exports = Pago;
