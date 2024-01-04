// Fungsi untuk memeriksa otentikasi
function checkAuthentication() {
    // Misalnya, cek keberadaan token sesi
    var isAuthenticated = localStorage.getItem('sessionToken') !== null;

    if (!isAuthenticated) {
        window.location.href = 'https://inababykids.github.io/login'; // Redirect ke halaman login jika tidak terotentikasi
    }
}

// Panggil fungsi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    checkAuthentication();
});
