const User = require('../models/user');

// Get all Users

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(404).json({
        status: 'fail',
        message: 'No users found!',
      });
    }
    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

// Create a user

exports.createUser = async (req, res) => {
  const nameExist = await User.findOne({ name: req.body.name });
  if (nameExist) {
    return res.status(400).send({ error: 'Name already exists' });
  }
  try {
    const { name } = req.body;
    const user = new User({ name });
    await user.save();
    res.status(201).json({
      message: 'User created successfully',
    });
  } catch (error) {
    res.status(500).json({
      error: err.message,
    });
  }
};
