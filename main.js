const btn = document.getElementById('btn');
const errMsg = document.querySelectorAll('.err_msg');
const fname = document.getElementById('f_name');
const lname = document.getElementById('l_name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');

btn.addEventListener('click', () => {
    if (fname.value <= 0 || fname.value == null || fname.value == undefined) {
        errMsg[0].style.setProperty('--visible', 'visible');
    }
    if (lname.value <= 0 || lname.value == null || lname.value == undefined) {
        errMsg[1].style.setProperty('--visible', 'visible');
    }
    if (email.value <= 0 || email.value == null || email.value == undefined || email.value == '' || (email.value.indexOf('.com') == -1)) {
        errMsg[2].style.setProperty('--visible', 'visible');
    }
    if (pass.value <= 0 || pass.value == null || pass.value == undefined || pass.value == '') {
        errMsg[3].style.setProperty('--visible', 'visible');
    }
})

fname.addEventListener('focus', () => {
    errMsg[0].style.setProperty('--visible', 'hidden');
})

fname.addEventListener('focusout', () => {
    if (fname.value <= 0 || fname.value == null || fname.value == undefined) {
        errMsg[0].style.setProperty('--visible', 'visible');

    } else {
        errMsg[0].style.setProperty('--visible', 'hidden');
    }
})

lname.addEventListener('focus', () => {
    errMsg[1].style.setProperty('--visible', 'hidden');
})

lname.addEventListener('focusout', () => {
    if (lname.value <= 0 || lname.value == null || lname.value == undefined) {
        errMsg[1].style.setProperty('--visible', 'visible');

    } else {
        errMsg[1].style.setProperty('--visible', 'hidden');
    }
})

email.addEventListener('focus', () => {
    errMsg[2].style.setProperty('--visible', 'hidden');
})

email.addEventListener('focusout', () => {
    if (email.value <= 0 || email.value == null || email.value == undefined || (email.value.indexOf('.com') == -1)) {
        errMsg[2].style.setProperty('--visible', 'visible');

    } else {
        errMsg[2].style.setProperty('--visible', 'hidden');
    }
})

pass.addEventListener('focus', () => {
    errMsg[3].style.setProperty('--visible', 'hidden');
})

pass.addEventListener('focusout', () => {
    if (pass.value <= 0 || pass.value == null || pass.value == undefined || pass.value == '') {
        errMsg[3].style.setProperty('--visible', 'visible');
    } else {
        errMsg[3].style.setProperty('--visible', 'hidden');
    }
})