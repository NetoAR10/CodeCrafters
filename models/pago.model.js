const { Model, DataTypes } = require('sequelize');
const sequelize = require('../util/database'); 

class Pago extends Model {}

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

module.exports = Pago;
