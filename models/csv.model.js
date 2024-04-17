const Sequelize = require('sequelize');
const db = require('../util/database');

const Causan = db.define('causan', {
  IDCausan: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  IDDeuda: {
    type: Sequelize.INTEGER
  },
  IDMateria: {
    type: Sequelize.INTEGER
  }
}, {
  timestamps: false
});

module.exports = { Causan };
