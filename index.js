const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer, {
  cors: {
    origin: '*',
  },
});
dotenv.config();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.URL_DB, () => {
  console.log('connected to db');
});

// Create a server for socket.io
io.on('connection', (socket) => {
  console.log('a user connected');
});
// Cors
app.use(cors({ origin: '*' }));

// Middleware
app.use(express.json());

// Import Routes
const usersRoute = require('./routes/user');
const messageRoute = require('./routes/message');

// Route Middlewares
app.use('/api/users', usersRoute);
app.use('/api/messages', messageRoute);

// server.listen()
app.listen(5000, () => console.log('Server is runing'));
