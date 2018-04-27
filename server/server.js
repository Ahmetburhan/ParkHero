const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const app = express();
app.use(bodyParser.json());


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Twilio Credentials
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.get('/hi', (req, res) => {
  res.json({ message: 'hello world' });
});

app.post('/send-text', (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const name = req.body.name;
  const address1 = req.body.address1;
  const photo = req.body.photo1;

  client.messages
  .create({
    to: `+1${phoneNumber}`,
    from: '+16504828352',
    body: `You parking Spot: ${name} , available @ ${address1}`,
    mediaUrl: `${photo}`,
  })
  .then(message => res.send({ok: true}))
// .catch(message => res.send({ ok: false }));
});

app.use(express.static(`${__dirname}/public`));


module.exports = app;


