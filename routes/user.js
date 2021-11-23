const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const config = require('../config/keys').secretKey;
const authMiddleware = require('../middleware/auth.middleware');

const User = require('../models/User');

router.post('/registration',
  [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longer than 3 and shorter than 12').isLength({ min: 3, max: 12 })
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Введите корректный email и пароль', errors });
      }

      const { email, password } = req.body;
      const candidate = await User.findOne({ email });
      if (candidate) {
        return res.status(400).json({ message: `Пользователь ${email} уже существует` });
      }

      const hashPassword = await bcrypt.hash(password, 8);
      const user = new User({ email, password: hashPassword });
      await user.save();
      return res.json({ message: 'User was created' });
    } catch (e) {
      res.send({ message: 'Server error' });
    }
  });

router.post('/login',

  async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: `Пользователь ${email} не найден` });
      }
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return res.status(400).json({ message: 'Некорректный пароль' });
      }

      const token = jwt.sign({ id: user.id }, config, { expiresIn: '3h' });
      return res.json({
        token,
        user: {
          id: user.id,
          token,
          email: user.email
        }
      });
    } catch (e) {
      res.send({ message: 'Server error' });
    }
  });

router.get('/auth', authMiddleware,

  async (req, res) => {
    const user = await User.findOne({ _id: req.user.id });
    const token = jwt.sign({ id: user.id }, config, { expiresIn: '3h' });
    return res.json({
      token,
      user: {
        id: user.id,
        token,
        email: user.email
      }
    });
  });

module.exports = router;
