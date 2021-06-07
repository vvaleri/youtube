const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const items = require('./routes/items');
const user = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json());

const database = require('./config/keys').mongoURI;

mongoose
  .connect(database)
  .then(() => console.log('connect...'));
  // .catch(err => console.log(err));

app.use('/items', items);
app.use('/auth', user);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`started on port ${port}`));
