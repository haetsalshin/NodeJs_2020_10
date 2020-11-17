//ES 2015이상의 문법
//import express form "express";
//import express from "express";

const express = require("express");
const router = express.Router();
// 퐇ㄹ더에 index.js파일이 있을 경우
// require()하면 index.js파일이 읽히게 된다
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

  bbsDao
    .findAll({ order: [["b_date_time", "DESC"]] })
    .then((bbsList) => {
      res.json(bbsList);
    })
    .catch((err) => {
      res.json(err);
    });

  //res.json(list);
});
/**
 * web Browser로부터 데이터 전달받기
 * ?변수=값 : req.query.변수
 * /:변수 : req.params.변수
 * form의 input tag의 name으로 설정된 변수 : req.body.변수
 * ajax를 통해서 전달받은 데이터 : req.body.변수
 */
router.post("/insert", (req, res) => {
  bbsDao
    .create({
      b_writer: req.body.b_writer,
      b_date_time: Date().toString(),
      b_subject: req.body.b_subject,
      b_content: req.body.b_content,
    })
    .then((result) => {
      //res.json(result);
      res.redirect("/api/bbsList");
    })
    .catch((err) => {
      res.json(err);
    });
});
//localhost:3000/api/view?id=8
http: router.get("/view", (req, res) => {
  const b_id = req.query.id;
  bbsDao
    .findOne({
      where: { b_id: Number(b_id) },
    })
    .then((result) => {
      res.json(result);
    });
});

//http://localhost:3000/api/view/8
router.get("/view/:id", (req, res) => {
  const b_id = req.params.id;
  bbsDao
    .findOne({
      where: { b_id: Number(b_id) },
    })
    .then((result) => {
      res.json(result);
    });
});

router.post("/update", (req, res) => {
  const b_id = req.params.id;
  bbsDao
    .update(
      {
        b_writer: req.body.b_writer,
        b_subject: req.body.b_subject,
        b_content: req.body.b_content,
      },
      { where: { b_id: Number(req.body.b_id) } }
    )
    .then((result) => {
      res.redirect("/api/bbsList");
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  const b_id = req.params.id;
  bbsDao
    .destroy({
      where: { b_id: Number(b_id) },
    })
    .then((result) => {
      res.redirect("/api/bbsList");
    });
});

module.exports = router;
