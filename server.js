const express = require('express');
const axios = require('axios');
const unzipper = require('unzipper');
const path = require('path');

const app = express();

// Download dist.zip file and extract
async function downloadAndExtract() {
    try {
        const zipUrl = 'https://github.com/KyleR56/paintle-front-end/releases/download/v1.0/dist.zip';
        const response = await axios({
            url: zipUrl,
            method: 'GET',
            responseType: 'stream',
        });

        response.data.pipe(unzipper.Extract({ path: path.join(__dirname) }));

        response.data.on('end', () => {
            console.log('dist.zip has been downloaded and extracted');
        });
    } catch (error) {
        console.error('Error downloading or extracting dist.zip:', error);
    }
}
downloadAndExtract();

// Serve static files from the 'dist/paintle-front-end/browser' directory.
app.use(express.static(path.join(__dirname, 'dist', 'paintle-front-end', 'browser')));

// Serve index.html
app.get('/{*any}', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'paintle-front-end', 'browser', 'index.html'))
})

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
