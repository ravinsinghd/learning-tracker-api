const mongoose = require('mongoose');

const trackerSchema = new mongoose.Schema(
  {
    topic: String,
    status: String,
    category: String,
  },
  { bufferCommands: false }
);

module.exports = trackerSchema;
