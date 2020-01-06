const express = require('express');
const app = express();
const cors = require('cors')
const get_files = require('./getFiles.js')

app.get('', (req, res) => {
    res.send("Hello")
})

app.get('/read', cors(), (req, res, next) => {
    var current_note = get_files.current_note 
    res.send(current_note); 
})

app.get('/title', cors(), (req, res, next) => {
    var page_title = get_files.page_title 
    res.send(page_title); 
})

app.listen(5000, () => {
    console.log("Server is up on port 5000!")
});