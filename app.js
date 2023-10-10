var express = require('./config/express');
const mongoose = require('./config/mongoose');

mongoose();
var app = express();

module.exports = app;
