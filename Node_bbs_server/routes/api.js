//ES 2015이상의 문법
//import express form "express";
//import express from "express";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //res.send("반갑습니다");
  res.render("index", { data: "data" });
});

router.get("/bbslist", (req, res) => {
  const list = [
    { id: 0, write: "장미", subject: "게시판" },
    { id: 1, write: "해바라기", subject: "게시판" },
    { id: 2, write: "토끼풀", subject: "게시판" },
  ];
  res.json(list);
});

module.exports = router;
