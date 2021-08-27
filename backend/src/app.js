const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const dayRouter = require("./routes/day");
const todoRouter = require("./routes/todo");
const mongoose = require("mongoose")
const cors = require("cors");

const app = express();
const port = 3002;

mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.once("open", function() {
  console.log("DB connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/day", dayRouter);
app.use("/todo", todoRouter);
app.use(cors());

app.get("/", (req, res) => {
  res.status(418).send("Hi hello");
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Listening on port ${port}`);
});
