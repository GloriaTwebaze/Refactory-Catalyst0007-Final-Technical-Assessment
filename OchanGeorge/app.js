// Importation of dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import routes
const form = require('./routes/form');

// Instantiation of Express.
const app = express();

// Set template engine
app.set('view engine', 'pug');
app.set('views', './views');

// Load in env
dotenv.config({ path: './config/config.env' });
// connect mongoose database

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', err => {
    console.log(`Connection error: ${err.message}`);
  });

mongoose.set('useCreateIndex', true);

// Middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use the imported Route
app.use('/', form);

// Creation of Server
const port = 3000;
app.listen(port || 3000, console.log(`Listen at port ${port}`));
