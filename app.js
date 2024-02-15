const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/create-account', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'create-account.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

app.get('/intro', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'intro.html'));
});

app.get('/how-to-play', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'how-to-play.html'));
});

app.get('/chapter-1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chapter-1.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
