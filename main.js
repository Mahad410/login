const btn = document.getElementById('sub_btn');
const errMsg = document.getElementById('err');
const email = document.getElementById('email');
email.addEventListener('focus', () => {
    errMsg.style.visibility = 'hidden';
    btn.style.setProperty('--visibility', 'hidden');
})

email.addEventListener('focusout', () => {
    if (email.value <= 0 || email.value == null || email.value == undefined || (email.value.indexOf('.com') == -1)) {
        errMsg.style.visibility = 'visible';
        btn.style.setProperty('--visibility', 'visible');
        return false;
    } else {
        errMsg.style.visibility = 'hidden';
    }
    console.log(email.value);
})
btn.addEventListener('click', () => {

    if (email.value <= 0 || email.value == null || email.value == undefined || (email.value.indexOf('.com') == -1)) {
        errMsg.style.visibility = 'visible';
        return false;
    } else {
        return true;
        btn.style.setProperty('--visibility', 'hidden');
    }

})