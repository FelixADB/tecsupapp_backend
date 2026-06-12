const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {

  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(401).json({ error: 'Acceso denegado. No hay token.' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Formato de token inválido.' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = verified;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Token no válido o expirado.' });
  }
};

module.exports = verificarToken;