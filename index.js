function checkAuthentication() {
    var isAuthenticated = localStorage.getItem('sessionToken') !== null;

    if (!isAuthenticated) {
        window.location.href = '/login.html';
    }
}
document.getElementById('logoutButton').addEventListener('click', function() {
    logout();
});

document.addEventListener('DOMContentLoaded', function() {
    checkAuthentication();
});
