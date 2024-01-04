function checkAuthentication() {

    const isAuthenticated = 


    if (!isAuthenticated) {
        window.location.href = '/login.html';
    }

}

document.addEventListener('DOMContentLoaded', function() {
    checkAuthentication();
});
