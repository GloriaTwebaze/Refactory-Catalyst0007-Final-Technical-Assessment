const express=require('express');
const app = express();
const bodyParser= require('body-parser');
require('dotenv').config(); 
const mongoose = require('mongoose');
const path=require('path');
const Reg=require('./models/Reg')
const regRoutes=require('./routes/regroutes')
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  mongoose.connection
    .on('open', () => {
      console.log('Mongoose connection open');
    })
    .on('error', (err) => {
      console.log(`Connection error: ${err.message}`);
    });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

//middle ware
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));



app.use('/',regRoutes);

  













// app.listen(3000, () => console.log('listening on port 3000'));
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port,() => console.log('listening on port 3000'));