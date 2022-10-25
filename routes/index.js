var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.post('/new', function(req, res) {
  const messageBody = {
    text: req.body.messageText,
    user: req.body.authorName,
    added: new Date()
  }

  messages.push(messageBody);

  res.redirect('/')
})

module.exports = router;
