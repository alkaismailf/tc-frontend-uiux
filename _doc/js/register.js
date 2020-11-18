const form = document.getElementById('form');
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
// const birthday = document.getElementById('birthday');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    // const birthdayValue = birthday.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(firstnameValue === '') {
        // show error
        // add error class
        setErrorFor(firstname, 'The first name field is required');
    } else {
        // add success class
        setSuccessFor(firstname);
    } 

    if(lastnameValue === '') {
        // show error
        // add error class
        setErrorFor(lastname, 'The last name field is required');
    } else {
        // add success class
        setSuccessFor(lastname);
    } 

    // if(birthdayValue === '') {
    //     // show error
    //     // add error class
    //     setErrorFor(birthday, 'The date of birth field is required');
    // } else {
    //     // add success class
    //     setSuccessFor(birthday);
    // } 

    if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'The username field is required');
    } else {
        // add success class
        setSuccessFor(username);
    } 

    if(emailValue === '') {
        // show error
        // add error class
        setErrorFor(email, 'The email field is required');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        // add success class
        setSuccessFor(email);
    } 

    if(phoneValue === '') {
        // show error
        // add error class
        setErrorFor(phone, 'The phone number field is required');
    } else {
        // add success class
        setSuccessFor(phone);
    } 

    if(passwordValue === '') {
        // show error
        // add error class
        setErrorFor(password, 'The password field is required');
    } else {
        // add success class
        setSuccessFor(password);
    } 

    if(password2Value === '') {
        // show error
        // add error class
        setErrorFor(password2, 'This field is required');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Password does not match');
    } else {
        // add success class
        setSuccessFor(password2);
    } 
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form-control

    // add success class
    formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}