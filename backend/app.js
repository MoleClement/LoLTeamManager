var createError = require('http-errors');
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const _ = require('lodash');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/BDD_dashboard', {useNewUrlParser: true}, (err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
    }
});

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var summonerRouter = require('./routes/summoners');
var matchRouter = require('./routes/matches');/*
var championRouter = require('./routes/champions');*/
var coachRouter = require('./routes/coach');
var coachesRouter = require('./routes/coaches');
var teamRouter = require('./routes/team');

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/summoners', summonerRouter);
app.use('/matches', matchRouter);
app.use('/coach', coachRouter);
app.use('/coaches', coachesRouter);
app.use('/team', teamRouter);

module.exports = app;
