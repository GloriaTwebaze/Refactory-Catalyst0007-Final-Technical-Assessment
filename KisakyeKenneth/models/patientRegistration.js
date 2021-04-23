const mongoose = require("mongoose");

const patientRegistration = mongoose.Schema({
  surname: {
    type: String,
    required: "Please enter patient surname"
  },
  given_name: {
    type: String,
    required: "Please enter patient given_name"
    
  },
  dob: {
      type: Date,
    required: "Please enter patient date of birth"
},
residence: {
      type: String,
      required: "Please enter patient residence"
    },
occupation: {
    type: String,
   required: "Please enter patient occuption"
    
    },
nationality: {
    type: String,
    required: "Please enter patient nationality"
    },
gender: {
    type: String,
    required: "Please select patient gender"
    },
category: {
        type: String,
        required: "Please select category"
}

    

    
});

module.exports = mongoose.model("PatientRegistration", patientRegistration);