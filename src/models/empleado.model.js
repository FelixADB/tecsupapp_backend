const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Empleado = sequelize.define('Empleado', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'empleados',
  timestamps: true
});

module.exports = Empleado;