const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
/**
 * Cros Script Policy를 무력화 하기 위한 depedency
 * React와 API 통신을 수행하는데 Cros Site 오류가 발생하는 것을
 * 방지하기 위해 서버에서 Cors정책을 무력화 시키는 것
 */
const cors = require("cors");

// index.js파일이 models파일 안에 있으면 그걸을 import해라
// ./models/index.js 파일을 require하라
const seqDB = require("./models").sequelize;
seqDB.sync();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const api = require("./routes/api.js");

// nodejs를 express framework로 감싼 서버 프로젝트 생성
const app = express();

app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
// http://localhost:3000/api/*
app.use("/api", api);

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
