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

const deleteEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (!empleado) return res.status(404).json({ error: 'Empleado no encontrado' });
    
    await empleado.destroy();
    res.json({ message: 'Empleado eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createEmpleado, getEmpleadosByEmpresa, deleteEmpleado };