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

function validateZip() {
    // get value of zip field
    const zip = document.getElementById('zip');
    // start with 0-9, five numbers, group the dash and four number 0-9 ( but the group is optional with the "?")
    const re = /^[0-9]{5}(-[0-9]{4})?$/;
    // if zip does not match re then we get the alert, otherwise remove the bootstrap invalid class
    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    // an email example 'pat123@gmail.com'
    // start with a group () of characters [] that can be 'a-z', 'A-Z', '0-9',"_", '-', '.' and also search for more than one '+'. Then we want a literal '@' sign so we take it out of the group. then we need another group with the same parameters. Then a literal '.' and to ge that we need to escape it. Next we need the .'com' so we search for lower and upppercase from a-z with a quantifier for 2-5 characters. .me, .com, .media all should work
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    // get the value of phone
    const phone = document.getElementById('phone');
    // We need literal parentheses so we need to escape them so they are not seen as a group '\(', and they need to be optional so we use a '?'. Then we need three digits '\d{3}'. then escape another optional literal parentheses '\)?' and then we need to separate with an optional literal dash, dot or space '[-. ]?' and then a set of three digits '\d{3}', and another optional spacing of dash, dot or space '[-. ]?', Then we need four more digits '\d{4}' and to end expression '$'
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}
