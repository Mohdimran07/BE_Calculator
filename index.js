const express = require('express');

const app = express();

app.get('',(req, res) => {
    res.send("You are in Home Page")
});

app.get('/about', (req, res) => {
    res.send('This is about page')
})

app.listen(5000)