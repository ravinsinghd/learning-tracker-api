let mongoose = require('mongoose');

export const trackerSchema = new mongoose.Schema(
  {
    topic: String,
    status: String,
    category: String,
  },
  { bufferCommands: false }
);
