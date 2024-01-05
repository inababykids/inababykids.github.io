function checkAuthentication() {
    var isAuthenticated = localStorage.getItem('sessionToken') !== null;

    if (!isAuthenticated) {
        window.location.href = '/login.html';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    checkAuthentication();
});
