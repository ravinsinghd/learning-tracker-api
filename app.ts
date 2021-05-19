var createError = require('http-errors');
import * as express from 'express';
import { Request, NextFunction, Response } from 'express';
var logger = require('morgan');
let mongoose = require('mongoose');
var cors = require('cors');
require('dotenv').config();

import { trackerRoute } from './routes/tracker';

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database connection open');
});

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/trackers', trackerRoute);

// catch 404 and forward to error handler
app.use(function (req: Request, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
