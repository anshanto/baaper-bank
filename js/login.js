function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.vaule;
}
document.getElementById('login-submit').addEventListener('click', function () {
    const userEmail = getInputValue('user-email');
    // get User Password
    const userPassword = getInputValue('user-password');
    if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
    }
    window.location.href = 'banking.html';
})