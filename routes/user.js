const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

router.post('/registration',
  [
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longer than 3 and shorter than 12').isLength({ min: 3, max: 12 })
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Uncorrect request', errors });
    }
    const { email, password } = req.body;

    const visitor = await User.findOne({ email });

    if (visitor) {
      return res.status(400).json({ message: `User with ${email} already exist` });
    }

    const hashPassword = await bcrypt.hash(password, 8);
    const user = new User({ email, password: hashPassword });
    await user.save();
    return res.json({ message: 'User was created' });
  });

module.exports = router;
