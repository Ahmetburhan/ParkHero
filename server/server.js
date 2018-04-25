const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.get('/hi', (req, res) => {
  res.json({ message: 'hello world' });
});

app.post('/echo', (req, res) => {
  res.json(req.body);
});

app.use(express.static(`${__dirname}/public`));


  var accountSid = process.env.TWILIO_ACCOUNT_SID;
  var authToken = process.env.TWILIO_AUTH_TOKEN;

  // Twilio Credentials
// var accountSid = process.env.TWILIO_ACCOUNT_SID;
// var token = process.env.TWILIO_AUTH_TOKEN;

        // require the Twilio module and create a REST client
        const client = require('twilio')(accountSid, authToken);

        client.messages
            .create({
                to: '+16507712966',
                from: '+16504828352',
                body: 'This is confirming that message sent',
            })
            .then(message => console.log(message.sid));


module.exports = app;
