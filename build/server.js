'use strict';

var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();
var app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Twilio Credentials
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var client = require('twilio')(accountSid, authToken);

app.get('/hello', function (req, res) {
  res.send('hello world');
});

app.get('/hi', function (req, res) {
  res.json({ message: 'hello world' });
});

app.post('/send-text', function (req, res) {
  var phoneNumber = req.body.phoneNumber;
  var name = req.body.name;
  var address1 = req.body.address1;
  var photo = req.body.photo1;

  client.messages.create({
    to: '+1' + phoneNumber,
    from: '+16504828352',
    body: 'You parking Spot: ' + name + ' , available @ ' + address1,
    mediaUrl: '' + photo
  }).then(function (message) {
    return res.send({ ok: true });
  });
  // .catch(message => res.send({ ok: false }));
});

app.use(express.static(__dirname + '/public'));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

module.exports = app;