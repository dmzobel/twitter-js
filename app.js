const express = require('express');
const app = express(); // create instance of express application
const nunjucks = require('nunjucks');
const routes = require('./routes');

// Nunjucks
var locals = {
  title: 'Hall of Fame',
  people: [
    { name: 'Gandalf' },
    { name: 'Frodo' },
    { name: 'Hermione' }
  ],
  beasts: [
    { name: 'Phoenix' },
    { name: 'Dragon' }
  ]
};

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
  if (err) throw err;
  console.log(output);
});

app.use('/', routes);
app.use(express.static('public'));

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

app.listen(3000, () => console.log('listening on port 3000'));
