const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const engines = require('consolidate');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO);

const pollSchema = new mongoose.Schema({
  heading: String,
  poll: [{
    name: String,
    votes: Number
  }]
});

const Poll = mongoose.model("Poll", pollSchema);

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
  Poll.find({}, function(err, allPolls) {
    if (err) {
      console.log(err);
    } else {
        res.render('index', {polls: allPolls});
    }
  });
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

app.get('/poll/:id', (req, res) => {
  Poll.findById(req.params.id, function(err, showPoll) {
    if (err) {
      console.log(err);
    } else {
      res.render('poll', {poll: showPoll});
    }
  });
});

app.listen(port, () => {
  console.log(`App open and listening on port ${port}`);
});
