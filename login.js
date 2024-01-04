
function validateLogin() {
    function validateLogin() {
        // Ambil data dari Google Sheets API
        const apiKey = 'AIzaSyBKTs08rp18jacSVRdE1HGpgHAdGyqBXkQ';
        const spreadsheetId = '1F5voYTnm3e-1h3iulQf4TXdHi9__u6WJTQe15l_haZ0';
        const range = 'Sheet1!A1:B20';
        
        const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;


        return fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Verifikasi kredensial pengguna
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;

                const userExists = data.values.some(row => row[0] === username && row[1] === password);

                if (userExists) {
                    // Pengguna berhasil login
                    alert('Login berhasil!');
                    return true; // Formulir akan disubmit
                } else {
                    // Kredensial tidak valid
                    alert('Login gagal. Kredensial tidak valid.');
                    return false; // Formulir tidak akan disubmit
                }
            })
            .catch(error => {
                console.error('Error:', error);
                return false; // Formulir tidak akan disubmit
            }); 
    }
}
