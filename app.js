const express = require('express');
const app = express(); // create instance of express application

// Log middleware
app.use(function (req, res, next) {
  console.log(req.method, req.url, res.statusCode);
  // call `next`, or else your app will be a black hole — receiving requests but never properly responding
  next();
});

app.use('/news', function (req, res, next) {
  console.log(`You've reached the news page`);
  next();
});


app.get('/', (req, res) => res.send('Welcome!'));

app.get('/news', (req, res) => res.send('News Page'));

app.listen(3000, () => console.log('App listening on port 3000!'));
