const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

app.get('/dobutsu', (req, res) => {
  res.render('dobutsu.ejs');
});

app.listen(3000);