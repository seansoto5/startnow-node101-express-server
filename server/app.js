
const express = require('express');
const morgan = require('morgan');
const app = express();
const fs = require('fs');
const javaScriptFile = require('./data.json');

app.use(morgan('dev'));

app.get('/', function (req, res) {
    fs.readFile('../startnow-web101-san-diego-top-spots/index.html', 'UTF-8', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

app.get('/main.js', function (req, res) {
    fs.readFile('../startnow-web101-san-diego-top-spots/main.js', 'UTF-8', (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

app.get('/data.json', function (req, res) {
    res.json(javaScriptFile);
});

app.get('/data', function (req, res) {
    res.send(javaScriptFile);
})

module.exports = app;
