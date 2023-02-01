const Message = require('../models/message');
const User = require('../models/user');

// Create a message
exports.createMessage = async (req, res) => {
  const userExist = await User.findOne({
    name: req.body.recipient,
  }).exec();
  if (!userExist) {
    return res.status(404).send({ error: 'User name not found' });
  }
  try {
    const { recipient, title, message } = req.body;
    const newMessage = new Message({
      recipient: recipient,
      title: title,
      message: message,
    });
    await newMessage.save();
    res.status(201).send({ message: 'The message has been sent' });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// Get recipient messages

exports.getRecipientMessages = async (req, res) => {
  try {
    const { name } = req.body;
    const messages = await Message.find({ recipient: name });
    res.status(200).send(messages);
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
