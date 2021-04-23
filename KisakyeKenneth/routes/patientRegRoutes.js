const express = require("express");
const route = express.Router();


const PatientRegistration = require("../models/patientRegistration");
//const messages = await req.consumeFlash('info');
route.get("/", (req, res) => {
    
    res.render("registrationForm");
  
});



//Register Employee
route.post("/", async (req, res) => {
  
    try {
      const patients_reg = new PatientRegistration(req.body);
        //res.send(patients_reg);
      patients_reg.save();
      res.redirect("back");
    } catch (error) {
      console.log(error);
      res.send("Unable to Save Records, check you DB");
    }
  
});

module.exports = route;
