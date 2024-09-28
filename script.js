let nameError = document.querySelector('#name-error');
let contactError = document.querySelector('#contact-error');
let emailError = document.querySelector('#email-error');
let messageError = document.querySelector('#message-error');
let submitMsg = document.querySelector('#submit-msg');

nameValidate = () => {

    name = document.querySelector('#contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Enter a valid Name';
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = 'Enter Full Name';
        return false
    }

    nameError.innerHTML = '<i class="fa-solid fa-square-check"></i>'
    return true;
}

numberValidate = () => {
    let number = document.querySelector('#contact-number').value;

    if (number.length !== 10) {
        contactError.innerHTML = 'Enter Valid number';
        return false;
    }
    if (!number.match(/^[0-9]+$/)) {
        contactError.innerHTML = 'Enter Ten Digits';
        return false;
    }

    contactError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;

}

emailValidate = () => {
  let email = document.querySelector('#contact-email').value;

    if (!email.match(/^[A-Za-z0-9._\-]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
        emailError.innerHTML = 'Please Enter valid Email';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;
}

msgValidate = () => {
    let msg = document.querySelector('#contact-msg').value;
    let required = 20;
    let left = required - msg.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more character required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-square-check"></i>';
    return true;

}

submitValidate = () => {
    if (!nameValidate() || !numberValidate() || !emailValidate() || !msgValidate()) {
        submitMsg.style.display = 'block';
        submitMsg.innerHTML = 'Enter All Details'
        setTimeout(() => {
            submitMsg.style.display = 'none';

        }, 3000);
        return false;
    } else {
        submitMsg.innerHTML = 'Successfully Submited' + '<i class="fa-solid fa-square-check"></i>';
        return true;
    }
}