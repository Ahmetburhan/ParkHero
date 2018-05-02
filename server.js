const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const MessagesSent = require('./models/messagesSent');

require('dotenv').config()
const app = express();
app.use(bodyParser.json());
const path = require('path');

//setting up the database
const config = require('./config/database'); 
mongoose.Promise = Promise; 
mongoose 
  .connect(config.database) 
  // .connect('mongodb+srv://mongodb-stitch-parkhero-cumon:' + process.env.MONGO_PSW + '@cluster0-xleqa.mongodb.net/test') 
  // .connect("mongodb://localhost/parkHero")
  .then( result => {
    console.log(`Connected to database '${result.connections[0].name}' on ${result.connections[0].host}:${result.connections[0].port}`)
  })
  .catch(err => console.log('There was an error with your connection:', err));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Twilio Credentials
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

// app.get('/hello', (req, res) => {
//   res.send('hello world');
// });

// app.get('/hi', (req, res) => {
//   res.json({ message: 'hello world' });
// });

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

app.use(express.static(__dirname + '/client/build/'))

// // Express only serves static assets in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

// // add the path module
// import path from 'path'
// // get reference to the client build directory
// const staticFiles = express.static(path.join(__dirname, '../../client/build/'))
// // pass the static files (react app) to the express app. 
// app.use(staticFiles)


app.post('/messagesSent', (req, res) => { //phoneNumber, address, placeName, userID
  let { phoneNumber, address, placeName } = req.body;
  const messagesSent = new MessagesSent({
    phoneNumber,
    address,
    placeName
  });
  messagesSent.save()
  .then(result => console.log(result))
  .catch(err => res.json(err));

  console.log('message sent')
});




module.exports = app;


