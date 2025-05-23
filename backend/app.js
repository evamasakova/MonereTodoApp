require("dotenv").config();
console.log("API Version:", process.env.APIV);
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODBCONNECTIONSTRING)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

const categoriesRouter = require("./routes/categories");
const tasksRouter = require("./routes/tasks");
const cors = require("cors"); // Import CORS middleware

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Allow requests from this origin
    methods: ["GET", "POST", "PUT"], // Allow specific HTTP methods
    credentials: true, // Allow cookies and credentials if needed
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//ROUTERS
app.use(`/v${process.env.APIV}/tasks`, tasksRouter);
app.use(`/v${process.env.APIV}/categories`, categoriesRouter);

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
