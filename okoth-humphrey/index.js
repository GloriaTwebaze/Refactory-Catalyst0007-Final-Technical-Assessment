// Dependencies.
const express = require('express');
const regRoutes = require('./router/regRoutes');
// const Registration = require('./models/Registration');

require('dotenv').config();
const mongoose = require('mongoose');



// Instantiations.
const app = express();

//Db connection.
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

//Configurations.
app.set('view engine', 'pug');
app.set('views', './views');

//Middleware.
app.use(express.urlencoded({ extended: true }));




// Middleware for serving static files(css,js,images).
app.use(express.static('public'));
app.use('/public/images', express.static(__dirname + '/public/images'));

// Routes.

app.use('/', regRoutes);



// Cater for undefined routes.
app.get('*', (req, res) => {
  res.send('The route specified doesnt exist');
});

//Server.
app.listen(3000, () => console.log('listening on port 3000'));
