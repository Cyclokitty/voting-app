const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const engines = require('consolidate');
const docs = require('./docs.json');

const port = process.env.PORT || 3000;

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', { 'docs': docs });
});

app.get('/about', (req, res) => {
  res.render('about', {});
});

app.get('/login', (req, res) => {
  res.render('login', {});
});

app.get('/signup', (req, res) => {
  res.render('signup', {});
});

app.get('/:word', (req, res) => {
  let heading = req.params.word;
  res.render('poll', {heading: `${heading}`});
});

app.listen(port, () => {
  console.log(`App open and listening on port ${port}`);
});
