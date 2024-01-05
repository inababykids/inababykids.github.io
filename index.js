function logout() {
    localStorage.removeItem('sessionToken');

    window.location.href = '/login.html';
}

function checkAuthentication() {
    var isAuthenticated = localStorage.getItem('sessionToken') !== null;

    if (!isAuthenticated) {
        window.location.href = '/login.html';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    checkAuthentication();

    var logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            // Memanggil fungsi logout jika tombol logout ditemukan
            logout();
        });
    }
});
