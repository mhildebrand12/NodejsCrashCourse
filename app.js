const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
  res.send('<p>home page</p>');
});

app.get('/about', (req, res) => {
  res.send('<p>about page</p>');
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page
app.use((req, res) => {
  res.sendFile('./views/404.html', {root: __dirname} )
});
