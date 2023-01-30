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
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = messageSchema;
