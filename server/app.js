const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const chalk = require("chalk");


// Load app-config yaml
let appConfig;
const yaml = require("js-yaml");
const fs = require("fs");
try {
  appConfig = yaml.safeLoad(fs.readFileSync(__dirname + "/../app-config.yaml"));
} catch (e) {
  console.log(e);
}
const { ExpressPort } = appConfig.PORTS;

// Routes

const yamlAllRouter = require("./routes/yamlAll");
const yamlRouter = require("./routes/yaml");
const pdfRouter = require("./routes/pdf");
const docxRouter = require("./routes/docx");
const resumeData = require("./routes/resume_data");

const helmet = require("helmet");

const app = express();

app.use(helmet());

/**
 * Connect to MongoDB.
 */

const MONGODB_URI =
  process.env.MONGODB_URI;
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    serverSelectionTimeoutMS: 2000
  },
  msg => {
    console.log("%s MongoDB connected", chalk.green("✔"));
  }
);

mongoose.connection.on("error", err => {
  console.error(err);
  console.log(
    "%s MongoDB connection error. Please make sure MongoDB is running.",
    chalk.red("✗")
  );
  process.exit();
});
console.log(mongoose.connection.readyState);

// mongoose.connection.on("connected", ()=>{});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// enable everything but multimode
app.use(require('prerender-node'));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Declare Routes

app.use("/", yamlAllRouter);
app.use("/api/yaml", yamlRouter);
app.use("/api/pdf", pdfRouter);
app.use("/api/docx", docxRouter);
app.use("/api/", resumeData);

app.use(express.static(path.join(__dirname, "../dist/")));

// handle every other route with index.html.
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../dist/index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// // error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
// app.listen(ExpressPort);
