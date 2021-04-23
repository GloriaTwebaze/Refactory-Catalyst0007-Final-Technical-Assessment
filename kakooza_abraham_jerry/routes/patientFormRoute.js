const express = require('express');
const router = express.Router();
const Patient = require('../models/Patients')

router.get('/',(req, res) => {
    res.render('patientForm', { title: "Patient" })
})

router.post('/createpatient',async (req, res) => {
    try {
        console.log(req.body)
        const patient = new Patient(req.body);
        await patient.save();
        res.redirect('/');
    }catch(err){
        console.log(err);
        res.send('Sorry! Something went wrong.');
    }
})





module.exports = router;