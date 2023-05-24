const mongoose = require('mongoose');
require('dotenv').config(); // If you're using .env file, make sure to require dotenv

const connectionString = process.env.MONGO_DB_URI; // Get the connection string from .env

mongoose.connect(connectionString);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (error) => {
  console.log('MongoDB connection error:', error);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});
