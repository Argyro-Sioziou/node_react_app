var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var router = require('./routes/router');
var cors = require("cors");

var app = express();

var mongoose = require('mongoose');
var config = require('./config');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

mongoose.connect(config.database, { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = app;
