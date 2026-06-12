const { Empleado } = require('../models');

const createEmpleado = async (req, res) => {
  try {
    const { nombre, cargo, empresaId } = req.body;
    const empleado = await Empleado.create({ nombre, cargo, empresaId });
    res.status(201).json(empleado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getEmpleadosByEmpresa = async (req, res) => {
  try {
    const { empresaId } = req.params;
    const empleados = await Empleado.findAll({ where: { empresaId } });
    res.json(empleados);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createEmpleado, getEmpleadosByEmpresa };