var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
console.log('test')
console.log('test', process.env.NODE_ENV)

if (process.env.NODE_ENV !== 'production') {
  const Bundler = require('parcel-bundler');
  const file = './src/index.html'; // Pass an absolute path to the entrypoint here
  const options = {}; // See options section of api docs, for the possibilities
  const bundler = new Bundler(file, options);
  app.use(bundler.middleware());

}
// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
