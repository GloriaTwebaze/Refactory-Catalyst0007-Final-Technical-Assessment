const express = require('express');
const router = express.Router();
const Registration = require('../model/Registration');

//Get and show the createEmployee.pug file.
router.get('/', (req, res) => {
  res.render('regform', { title: 'Covidform' });
});

// Save data from the createEmployee pug file.
router.post('/', async (req, res) => {
  try {
    const reg = new Registration(req.body);

    await reg.save();
   res.redirect('/');
  } catch (err) {
    console.log(err);
    res.send('Sorry! Something went wrong.');
  }
});







module.exports = router;
