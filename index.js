// Fungsi logout yang perlu di definisikan
function logout() {
    // Hapus token sesi dari localStorage
    localStorage.removeItem('sessionToken');

    // Redirect ke halaman login setelah logout
    window.location.href = '/login.html';
}

// Fungsi untuk memeriksa otentikasi
function checkAuthentication() {
    var isAuthenticated = localStorage.getItem('sessionToken') !== null;

    if (!isAuthenticated) {
        window.location.href = '/login.html';
    }
}

// Event listener untuk tombol logout
document.addEventListener('DOMContentLoaded', function() {
    // Memeriksa otentikasi saat halaman dimuat
    checkAuthentication();

    // Menambahkan event listener untuk tombol logout
    var logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            // Memanggil fungsi logout jika tombol logout ditemukan
            logout();
        });
    }
});
