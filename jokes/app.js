const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

require("./config/mongoose.config");

const AllMyUserRoutes = require("./routes/jokes.routes");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

AllMyUserRoutes(app);

module.exports = app;
