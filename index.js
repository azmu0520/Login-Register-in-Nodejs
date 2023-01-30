const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

dotenv.config();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.URL_DB, () => {
  console.log('connected to db');
});

// Cors
app.use(cors({ origin: '*' }));

// Middleware
app.use(express.json());

// Import Routes
const usersRoute = require('./routes/user');

// Route Middlewares
app.use('/api/users', usersRoute);

app.listen(5000, () => console.log('Server is runing'));
