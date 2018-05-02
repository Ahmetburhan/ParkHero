const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// const usersSchema = new Schema({
//   userID: Number,
//   name: String,
//   email: String,
//   messagesSent: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "MessagesSent"
//     }
//   ]
// });

const Users = module.exports = mongoose.model('Users', usersSchema);