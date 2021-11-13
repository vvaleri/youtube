/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const config = require('../config/keys').secretKey;

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];
    // const token = req.header('x-auth-token');
    if (!token) {
      return res.status(401).json({ message: 'Auth error' });
    }
    const decoded = jwt.verify(token, config);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Auth e' });
  }
};
