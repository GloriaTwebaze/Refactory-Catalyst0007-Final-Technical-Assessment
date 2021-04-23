const surname = document.patientRegistration.surname;
const given_name = document.patientRegistration.given_name;
const dob = document.patientRegistration.dob;
const residence = document.patientRegistration.residence;
const occupation = document.patientRegistration.occupation;
const gender = document.patientRegistration.gender;
const category = document.patientRegistration.category;
const name_Regex = /^[a-zA-Z ]+$/;

const surname_error= document.getElementById('surname_error');
const givenName_error = document.getElementById('givenName_error');
const dob_error = document.getElementById('dob_error');
const residence_error = document.getElementById('residence_error');
const occcupation_error = document.getElementById('occcupation_error');
const gender_error = document.getElementById('gender_error');
const category_error = document.getElementById('category_error');

let patient_validation = () => {     
    
     if (surname.value == "" && given_name.value == "" && dob.value ==""&& residence.value =="" && dob.value =="" && occupation.value =="" && category.value =="default") {
          surname_error.style.color = 'red';
          surname_error.innerHTML = 'This field is required';
          surname.style.border = '1px solid red';
         
         surname.focus();
          //event.preventDefault();
         
         return false;
     }
    
    if (surname.value == "") {
       
          surname_error.innerHTML = 'This field is required';
          surname.style.border = '1px solid red';
         
         surname.focus();
         // event.preventDefault();
         
         return false;
    }
     if (surname.value.length < 1) {
        
          surname_error.innerHTML = 'Name Should be more than 1 charater is required';
          surname.style.border = '1px solid red';
         
         surname.focus();
         // event.preventDefault();
         
         return false;
     }
    if (surname.value.length > 16) {
        
          surname_error.innerHTML = 'Name Shouldnot exceed 16 characters';
          surname.style.border = '1px solid red';
         
         surname.focus();
          //event.preventDefault();
         
         return false;
    }

    if (given_name.value == "") {
       
          givenName_error.innerHTML = 'This field is required';
          given_name.style.border = '1px solid red';
         
         given_name.focus();
          //event.preventDefault();
         
         return false;
    }
     if (given_name.value.length < 1) {
        
          givenName_error.innerHTML = 'Name Should be more than 1 charater is required';
          given_name.style.border = '1px solid red';
         
         given_name.focus();
        //   event.preventDefault();
         
         return false;
     }
    if (given_name.value.length > 16) {
        
          givenName_error.innerHTML = 'Name Shouldnot exceed 16 characters';
          given_name.style.border = '1px solid red';
         
         given_name.focus();
          //event.preventDefault();
         
         return false;
    }

    
     
     
}
 


