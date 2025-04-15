const express = require('express');
const axios = require('axios');
const unzipper = require('unzipper');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*' }));

let puzzles = [];

// Read puzzles.json and store in puzzles.
try {
    const data = fs.readFileSync(path.join(__dirname, 'data', 'puzzles.json'), 'utf8');
    puzzles = JSON.parse(data);
} catch (error) {
    console.error('Failed to load puzzles.json:', error);
}


// Serve static files from the 'dist/paintle-front-end/browser' directory.
app.use(express.static(path.join(__dirname, 'dist', 'paintle-front-end', 'browser')));

// API route to get puzzle by day
app.get('/api/puzzles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const puzzle = puzzles.find(p => p.id == id);
    if (puzzle) {
        res.json(puzzle);
    } else {
        res.status(404).json({ error: 'Puzzle not found' });
    }
});

// Serve index.html
app.get('/{*any}', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'paintle-front-end', 'browser', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
