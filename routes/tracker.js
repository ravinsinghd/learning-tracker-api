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

router.get('/counts', function (req, res, next) {
  trackerModel
    .aggregate([
      {
        $group: {
          _id: {
            category: '$category',
            status: '$status',
          },
          count: {
            $sum: 1,
          },
        },
      },
      {
        $group: {
          _id: '$_id.category',
          statusCount: {
            $addToSet: {
              status: '$_id.status',
              count: '$count',
            },
          },
        },
      },
    ])
    .exec(function (err, data) {
      res.json(data);
    });
});

module.exports = router;
