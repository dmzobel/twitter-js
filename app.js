const express = require('express');
const app = express(); // create instance of express application

app.get('/', (req, res) => res.send('Welcome!'));

app.get('/news', (req, res) => res.send('News Page'));

app.listen(3000, () => console.log('App listening on port 3000!'));
