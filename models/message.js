const mongoose = require('mongoose');
//Define a schema
const messageSchema = new mongoose.Schema({
  recipient: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
