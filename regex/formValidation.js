// For Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

// happens on blur event
function validateName() {
    // get value of the name field
    const name = document.getElementById('name');
    // letters upper or lowercase between 2 and 10 characters
    const re = /^[a-zA-Z]{2,10}$/;
    // if the value of name is not equal to the re expression then add the bootstrap class of 'is-invalid' to activate that css visual que
    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}
function validateZip() {}
function validateEmail() {}
function validatePhone() {}
