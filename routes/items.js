const express = require('express');

const router = express.Router();

const Item = require('../models/Item');

router.get('/:userEmail', (req, res) => {
  Item.find({ userEmail: req.params.userEmail })
    .then(items => res.json(items));
});

router.post('/add', (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    name: req.body.name,
    userEmail: req.body.userEmail
  });

  newItem.save().then(item => res.json(item));
});

router.put('/update/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      item.title = req.body.title,
      item.name = req.body.name,
      item.userEmail = req.body.userEmail;
      item.save().then(() => res.json('update'));
    });
});

router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
