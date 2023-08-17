const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

// Serve the HTML page
app.get('/sendMessage', (req, res) => {
    // res.sendFile(__dirname + '/index.html');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
