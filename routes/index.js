const express = require('express');
const router = express.Router(); // could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

// router.get('/stylesheets/style.css', function (req, res) {
//   res.sendFile('style.css', {root:'./public/stylesheets'});
// });
router.get('style.css', express.static('public'));

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render('index', { tweets: tweets });
});

router.get('/users/:name', function (req, res) {
  let name = req.params.name;
  let tweetAuthors = tweetBank.find({ name: name });
  res.render('index', { tweets: tweetAuthors });
});

router.get('/tweets/:id', function (req, res) {
  let tweetId = +req.params.id;
  let findId = tweetBank.find({ tweetId: tweetId });
  res.render('index', { tweets: findId });
});

module.exports = router;
