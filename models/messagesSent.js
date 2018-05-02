const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var messagesSentSchema = new Schema({
  phoneNumber: Number,
  address: String,
  placeName: String
});

// const MessagesSent = 
module.exports = mongoose.model('MessagesSent', messagesSentSchema);
