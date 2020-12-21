var express = require('express');
var router = express.Router();
const moment = require('moment');
const messages = require('../public/javascripts/messages');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.post('/new', (req, res, next) => {
  const newMessage = {
    title: req.body.title,
    description: req.body.description,
    username: req.body.username,
    date: moment()
      .startOf('hour' - 1)
      .fromNow(),
  };
  messages.unshift(newMessage);
  res.redirect('/');
});

module.exports = router;
