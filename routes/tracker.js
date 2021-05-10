var express = require('express');
var router = express.Router();

const trackerModel = require('../database/model/tracker.model');

/* GET users listing. */
router.get('/', function (req, res, next) {
  trackerModel.find({}, function (err, trackers) {
    if (err) return console.error(err);
    res.json(trackers);
  });
});

module.exports = router;
