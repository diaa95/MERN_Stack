var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

var NewUser = require('./routes/NewUser')
var NewCompany = require('./routes/NewCompany')
var UserCompany = require('./routes/UserCompany')



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/users/new', NewUser );
app.use('/api/companies/new', NewCompany);
app.use('/api/user/company', UserCompany);

module.exports = app;
