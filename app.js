const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/script.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, './script.js'));
});

app.get('/serviceavailable/', (req, res) => {
    res.send({ "isSucceeded": true });
});

app.get('/getinfo/', (req, res) => {
    res.send({ "isSucceeded": true, "text": "Info info info info info info" });
});

app.get('/getdescription/', (req, res) => {
    res.send({ "isSucceeded": true, "text": "Description Description Description Description Description Description" });
});

app.listen(4040, () => console.log('App listening on port 4040'));
