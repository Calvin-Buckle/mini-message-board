var express = require('express');
var router = express.Router();

/* GET home page. */

const messages = [
  {
    text: "Hi there",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World",
    user: "Charles",
    added: new Date()
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next){
  res.render('forms', {title: 'New Form'});
});

router.get('/error', (req, res, next) =>{
  res.render('error', {title: 'Error'})
})


router.post('/new', (req, res) => {
  const { author, message } = req.body;
  if (author && message) {
    messages.push({
      text: message,
      user: author,
      added: new Date()
    });
  }
  res.redirect('/');
});

module.exports = router;  