const express = require("express");
const db = require("../db");
const router  = express.Router();

router.get("/", (req, res) => {
  db.getAll_member((items) => {
    res.json(items);
  });
});

router.get("/:memId", (req, res) => {
  db.getOne_member(req.params.memId, (items) => {
    res.json(items);
  });
});

router.get("/time/:time", (req, res) => {
  db.get_membersByTime(req.params.time, (items) => {
    res.json(items);
  });
});

router.get("/cell/:time/:day", (req, res) => {
  db.get_memberByTimeDay(req.params.time, req.params.day, (items) => {
    res.json(items);
  });
});

router.post("/", (req, res) => {
    // const {contents} = req.body;
    // console.log(req.body);
    db.add_member(req.body, (newItem) => {
      res.json(newItem);
    });
    // console.log(req.body);
  });

router.delete("/:id", (req, res) => {
  db.deleteById(req.params.id, () => {
    res.status(200).send();
  });
});

router.put("/:id/finish", (req, res) => {
  db.setDone(req.params.id, () => {
    res.status(200).send();
  });
});

module.exports = router;
