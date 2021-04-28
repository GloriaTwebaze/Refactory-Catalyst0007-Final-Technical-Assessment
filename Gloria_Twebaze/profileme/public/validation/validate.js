function register() {
    surName = document.registermember.surname;
    givenName = document.registermember.givenname;
    country = document.registermember.country;
    phoneNumber = document.registermember.phone_num;
    age = document.registermember.date;


    
    if (surName.value == ''){
        surName.style.border = '1px solid red';
        document.getElementById("sname").innerHTML = "surname is required"
        return false;

    }




}