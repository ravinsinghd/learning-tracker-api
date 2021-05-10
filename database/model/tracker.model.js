const mongoose = require('mongoose');
const trackerSchema = require('../schema/tracker.schema');

const trackerModel = mongoose.model('topics', trackerSchema);

module.exports = trackerModel;
