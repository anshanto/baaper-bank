document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.vaule;
    // get User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.vaule;

    if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
    }
    window.location.href = 'banking.html';
})