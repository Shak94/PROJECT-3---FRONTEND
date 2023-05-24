const mongoose = require('mongoose');
require('dotenv').config();

// My Nightmares Schema
const nightmaresSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Nightmare must have a title."],
    unique: true,
  },
  meaning: {
    type: String,
    required: [true, "Nightmare must have a description/nightmare meaning."],
    unique: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
}, {
  timestamps: true,
});

const Nightmares = mongoose.model('Nightmare', nightmaresSchema);

module.exports = Nightmares;
