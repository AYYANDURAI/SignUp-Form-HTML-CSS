const form = document.getElementById("form");


form.addEventListener('submit', e => {
    e.preventDefault();

    const firstname = form['FirstName'].value;
    const lastname = form['LastName'].value;
    const email = form['EmailAddress'].value;
    const password = form['Password'].value;
    if (!firstname) {
        addErroTo('FirstName', 'First Name is required');
    } else {
        removeErrorTo('FirstName');
    } if (!lastname) {
        addErroTo('LastName', 'Last Name is required');
    } else {
        removeErrorTo('LastName');
    } if (!email || !isValid(email)) {
        addErroTo('EmailAddress', 'Email Address is required');
    } else {
        removeErrorTo('EmailAddress');
    } if (!password) {
        addErroTo('Password', 'Password is required');
    } else {
        removeErrorTo('Password');
    }
});

function removeErrorTo(fieldName) {
    const formcontrol = form[fieldName].parentNode;
    formcontrol.classList.add('error');
}

function addErroTo(fieldName, message) {
    const formcontrol = form[fieldName].parentNode;
    formcontrol.classList.add('error');
    const small = form[fieldName].parentNode.querySelector('small');
    small.innerText = message;
}

function isValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}