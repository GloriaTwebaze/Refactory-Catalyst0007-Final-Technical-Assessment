//Imports
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config(); //Required to work with .env file
var flash = require('express-flash-messages')
var session = require('express-session');




//Route middlewares
var patientRegistration = require("./routes/patientRegRoutes");

//Instantiation
const app = express();

//Middlewares
app.use(express.static("public")); //Serve static files like css, js.
app.use(express.static("files"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: 'woot',
                  resave: false, 
                  saveUninitialized: false}));

// Flash messages middleware
app.use(flash())

//Set view Enginee
app.set("view engine", "pug");
app.set("views", "./views");

//        Endpoints and Routes
app.use("/", patientRegistration);


//Non existing routes
app.get("*", (req, res) => {
  res.send("Error Page, route doesnot exist")
})

//Database Connection
mongoose.connect(process.env.LOCAL_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true 
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

app.listen(process.env.PORT, () => {
  console.log("Listening on port ", process.env.PORT);
});