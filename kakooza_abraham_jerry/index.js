const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const patients = require('./routes/patientFormRoute');

// Instantiations
const app = express();


// Configurations
app.set('view engine', 'pug');
app.set('views', './views');

//Database Connections
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// in the new version, bodyParser is incorparated in the express new version
app.use(express.urlencoded({extended: true}))


// middleware for serving static files(css,js,images)
app.use(express.static('public'));
app.use('/public/images', express.static(__dirname + '/public/images'));

// Routes

app.use('/', patients);

//Ignoring all non specified files
app.get('*', (req, res)=> {
    res.send('The route specified doesnt exist')
})

app.listen(3000, () => console.log('listening on port 3000'));