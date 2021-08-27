const express = require("express");
const db = require("../db");
const router  = express.Router();

router.get("/", (req, res) => {
  db.getAll((items) => {
    res.json(items);
  });
});

// router.("/:day", (req, res) => {
//   const {day} = req.body.day;
//   db.find({day: day}) => 
//   db.add(name, (newItem) => {
//     res.json(newItem);
//   });
// });

router.post("/", (req, res) => {
    const {day} = req.body;
    db.add_day(day, (newItem) => {
      res.json(newItem);
    });
  });

router.delete("/:day", (req, res) => {
  // console.log("hello")
  // console.log(req.params.day)

  db.deleteByDay(
    req.params.day, (newItem) => {
        res.status(200).send();
      })
    });

router.put("/:id/finish", (req, res) => {
  db.setDone(req.params.id, () => {
    res.status(200).send();
  });
});

module.exports = router;
