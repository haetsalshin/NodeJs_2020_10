//ES 2015이상의 문법
//import express form "express";
//import express from "express";

const express = require("express");
const router = express.Router();
const { bbsDao } = require("../models");

router.get("/", (req, res) => {
  //res.send("반갑습니다");
  res.render("index", { data: "data" });
});

router.get("/bbsList", (req, res) => {
  const list = [
    { id: 0, write: "장미", subject: "게시판" },
    { id: 1, write: "해바라기", subject: "게시판" },
    { id: 2, write: "토끼풀", subject: "게시판" },
  ];

  bbsDao.findAll({ order: ["b_date_time"] }).then((bbsList) => {
    res.json(bbsList);
  });

  //res.json(list);
});

router.get("/insert", (req, res) => {
  bbsDao
    .create({
      b_writer: req.query.writer || "이몽룡.그만.",
      b_date_time: Date().toString(),
      b_subject: "게시판 작성",
      b_content: "게시판 작성 꿈에 보일라..?",
    })
    .then((result) => {
      //res.json(result);
      res.redirect("/api/bbsList");
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
