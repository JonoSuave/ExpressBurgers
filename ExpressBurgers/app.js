var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index_route');
var usersRouter = require('./routes/users_route');
var burgersRouter = require('./routes/burgers_route');
var shakesRouter = require('./routes/shakes_route');
var friesRouter = require('./routes/fries_route');
var locationRouter = require('./routes/location_route');
var signupRouter = require('./routes/signup_route');
var loginRouter = require('./routes/login_route');

var app = express();
var mongoose = require('mongoose');

// connect and prepare DB
const DEV_DB_URL = 'mongodb://localhost:27017/users';
const mongoDB = process.env.MONGO_URI || DEV_DB_URL;
// mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.connect(mongoDB, {useNewUrlParser: true}).then(
  () => { console.log(`Connection is ready to use. The connect Promise resolved.`) },
  err => { console.log(`MongoDB connection failed.`)}
);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/burgers', burgersRouter);
app.use('/shakes', shakesRouter);
app.use('/fries', friesRouter);
app.use('/location', locationRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
