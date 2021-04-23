const express = require('express');
const router = express.Router();
const Patient = require('../models/Patients')

router.get('/',(req, res) => {
    res.render('patient', { title: "Patient" })
})







module.exports = router;