var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var summonerRouter = require('./routes/summoners');
var matchRouter = require('./routes/matches');/*
var championRouter = require('./routes/champions');*/

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use('/summoners', summonerRouter);
app.use('/matches', matchRouter);

module.exports = app;
