import * as express from 'express';
import { trackerModel } from '../database/model/tracker.model';
import { getCountStat } from '../helper';

const router = express.Router();

router.get('/', function (req, res, next) {
  trackerModel.find({}, function (err, trackers) {
    if (err) return console.error(err);
    res.json(trackers);
  });
});

router.get('/counts', function (req, res, next) {
  getCountStat().exec(function (err, data) {
    res.json(data);
  });
});

router.get('/chart', function (req, res, next) {});

export const trackerRoute = router;
