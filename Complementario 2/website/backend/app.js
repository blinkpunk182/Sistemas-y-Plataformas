var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var bebidaRouter = require('./routes/bebida');
var salchipapaRouter = require('./routes/salchipapa');
var hamburRouter = require('./routes/hambur');
var batidoRouter = require('./routes/batido');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/bebida', bebidaRouter);
app.use('/salchipapa', salchipapaRouter);
app.use('/add', salchipapaRouter);
app.use('/anadir', bebidaRouter);
app.use('/hambur', hamburRouter);
app.use('/nuevo', hamburRouter);
app.use('/batido', batidoRouter);
app.use('/adicional', batidoRouter);
module.exports = app;
