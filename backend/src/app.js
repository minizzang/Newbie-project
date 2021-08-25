const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const todoRouter = require("./routes/member");
const mongoose = require("mongoose")
const cors = require("cors");

const app = express();
const port = 3002;

mongoose.connect("mongodb://localhost:27017/todo", {
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

app.use("/todo", todoRouter);
app.use(cors());

app.get("/", (req, res) => {
  res.status(418).send("Hi hello");
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Listening on port ${port}`);
});
