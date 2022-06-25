const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs() {
    // values from inputs
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(fnameValue === '') {
        // show error
        // add error class
        setErrorFor(fname, 'First Name cannot be empty');
    } else {
        // add success class
        setSuccessFor(fname);
    }

    if(lnameValue === '') {
        // show error
        // add error class
        setErrorFor(lname, 'Last Name cannot be empty');
    } else {
        // add success class
        setSuccessFor(lname);
    }

    if(emailValue === '') {
        // show error
        // add error class
        setErrorFor(email, 'Email cannot be empty');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        // add success class
        setSuccessFor(email);
    }

    if(passwordValue === '') {
        // show error
        // add error class
        setErrorFor(password, 'Password cannot be empty');
    } else {
        // add success class
        setSuccessFor(password);
    }
}

// success and error functions
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    
    // add success class
    formControl.className = 'form-control success';
}

// email validation
function isEmail(email) {
    return /^(([^<>()\[\]\\.,:;\s@”]+(\.[^<>()\[\]\\.,:;\s@”]+)*)!(”.+”))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])!(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);;
}