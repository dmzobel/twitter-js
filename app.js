const express = require('express');
const app = express(); // create instance of express application
const nunjucks = require('nunjucks');
const routes = require('./routes/index');

// Nunjucks
app.set('view engine', 'html'); // specifies the file extension of our templates
app.engine('html', nunjucks.render); // pass html data into nunjucks.render function

nunjucks.configure('views', {noCache: true}); // where to find our html file, and do not cache data
nunjucks.render('index.html', {}, function (err, output) {
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
