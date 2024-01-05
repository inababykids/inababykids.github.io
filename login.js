function validateLogin(event) {
    event.preventDefault();

    // Kredensial OAuth
    const clientId = '793638504770-j76a4gsemn2abce5gev38sujpicsrqd8.apps.googleusercontent.com';
    const clientSecret = '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';
    const redirectUri = 'urn:ietf:wg:oauth:2.0:oob';
    const spreadsheetId = '1F5voYTnm3e-1h3iulQf4TXdHi9__u6WJTQe15l_haZ0';
    
    // Buat instance OAuth2Client
    const oAuth2Client = new OAuth2Client(clientId, clientSecret, redirectUri);

    // Buat URL otorisasi dengan scope readonly
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    console.log('Authorize this app by visiting this url:', authUrl);

    // Setelah pengguna memberikan izin, Anda akan mendapatkan kode otorisasi
    // yang dapat dimasukkan manual atau dengan cara lain sesuai dengan kebutuhan aplikasi Anda
    const code = 'CODE_FROM_USER'; // Sesuaikan dengan kode otorisasi yang diterima

    // Tukarkan kode otorisasi dengan token akses
    oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);

        // Token akses sekarang dapat digunakan untuk mengakses Spreadsheet API
        oAuth2Client.setCredentials(token);

        // Implementasikan logika akses ke Spreadsheet API di sini 
        const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });
        sheets.spreadsheets.values.get({
            spreadsheetId: spreadsheetId,
            range: 'Sheet1!A1:B20', // Sesuaikan dengan rentang data Anda
        }, (err, res) => {
            if (err) return console.error('The API returned an error:', err.message);
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const userExists = res.data.values.some(row => row[0] === username && row[1] === password);

            if (userExists) {
                alert('Login berhasil!');
                
                localStorage.setItem('sessionToken', 'yourSessionTokenHere');

                window.location.href = '/index.html';
            } else {
                alert('Login gagal. Kredensial tidak valid.');
            }
        });
    });
}
