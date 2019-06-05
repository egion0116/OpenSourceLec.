const express = require('express');
const fs = require('fs');
const url = require('url');

const app = express();
const port = 8080;

const template = fs.readFileSync('index.html');

app.get('/', (req, res) => {
    res.send("template");
})

app.listen(port, () => {
    console.log("Success!");
} )