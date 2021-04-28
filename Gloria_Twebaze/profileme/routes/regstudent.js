const express = require("express")
const router = express.Router()
const mongoose = require('mongoose');


router.get("/registerstudent", (req, res) => {
	res.render("registerstudent")
})

router.post('/registerstudent',  async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save()
        res.redirect('/')
    }catch(err){
        console.log(err);
        res.send('Sorry! Please fill all the required fields!');
    }
 })





 module.exports = router