const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/formdata', (req, res) => {
  var api_key = process.env.REACT_APP_MAILGUN_API_KEY;
  var domain = process.env.REACT_APP_MAILGUN_DOMAIN;
  var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
   
  var data = {
    from: req.body.contactName + '<' + req.body.contactEmail +'>',
    to: process.env.REACT_APP_PERSONAL_EMAIL,
    subject: req.body.contactSubject,
    text: req.body.contactMessage
  };
   
  mailgun.messages().send(data, (error, body) => {
    console.log(body);
  });
});

app.listen(process.env.PORT || 8080);