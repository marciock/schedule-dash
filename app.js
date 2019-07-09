const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const saveRouter = require('./routes/save');
const findRouter = require('./routes/find');
const updateRouter = require('./routes/update');
const searchRouter = require('./routes/search');
const searchActualRouter = require('./routes/search_actual');

const bodyParser=require('body-parser');

const expressLayouts = require('express-ejs-layouts');

const app = express();





//db.on('error',console.error.bind(console,'Mongodb connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);

app.use(logger('dev'));
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/save', saveRouter);
app.use('/find', findRouter);
app.use('/update', updateRouter);
app.use('/search', searchRouter);
app.use('/search_actual', searchActualRouter);

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
