const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/empleado.controller');

router.post('/', ctrl.createEmpleado);
router.get('/empresa/:empresaId', ctrl.getEmpleadosByEmpresa);

module.exports = router;