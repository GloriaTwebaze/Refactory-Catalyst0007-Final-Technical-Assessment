//Defining the form elements.
var sur_name = document.form.surname;
var give_name = document.form.givename;
var dob = document.form.date;
var address = document.form.residence;
var work = document.form.occupation
var nation = document.form.nationality;
var sex = document.form.gender;

//Constants for validating.
const minName = 16;
const addresslength=20;
const maxWord = 50;
const age =150;

//Validating the form inputs.
let validation = () => {

if (surname_name == '') {
  surname_name.focus();
  surname_name.style.border = '2px solid red';
  alert('Please enter name.');
  return false;
}
  if (surname_name.value.length < minName) {
    surname_name.focus();
   surname_name.style.border = '2px solid red';
    alert('Please enter a valid name (at least 16 characters).');
    return false;
  }
 
  if (give_name.value.length < minName) {
    give_name.focus();
    give_name.style.border = '2px solid red';
    alert('Please enter a valid givenname (at least 16 characters).');
    return false;
  }

  if (dob.value == "") {
    dob.focus();
    dob.style.border = '2px solid red';
    alert('Please enter a valid age.');
    return false;
  }
 

  if (address.value.length < addresslength ) {
    address.focus();
    address.style.border = '2px solid red';
    alert('Please enter a location.');
    return false;
  }

  
};
