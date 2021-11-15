const mongoose = require('mongoose');

const { Schema } = mongoose;

const ItemSchema = new Schema({
  title: { type: String, required: true },
  name: { type: String, required: true },
  userEmail: { type: String, ref: 'User' }
});

module.exports = mongoose.model('Item', ItemSchema);
