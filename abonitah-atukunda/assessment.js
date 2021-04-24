function validateForm() {
    const letters = /^[A-Za-z]+$/;
    if (inputSurname.value.match(letters)){
      return true;
    }else {
        inputSurname.focus();
        inputSurname.style.border = '2px solid red';
      alert('Field is required!');
      return false;
    }
  };