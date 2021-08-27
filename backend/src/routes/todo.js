const express = require("express");
const db = require("../db");
const router  = express.Router();

router.get("/", (req, res) => {
  db.getAll((items) => {
    res.json(items);
  });
});

router.post("/", (req, res) => {
    const {contents} = req.body;
    db.add(contents, (newItem) => {
      res.json(newItem);
    });
  });

router.delete("/:id", (req, res) => {
  db.remove(req.params.id, () => {
    res.status(200).send();
  });
});

router.put("/:id/finish", (req, res) => {
  db.setDone(req.params.id, () => {
    res.status(200).send();
  });
});

module.exports = router;
