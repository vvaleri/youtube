const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/items');

const app = express();

app.use(express.json());

const database = require('./config/keys').mongoURI;

mongoose
  .connect(database)
  .then(() => console.log('connect...'))
  .catch(err => console.log(err));

app.use('/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`started on port ${port}`));
