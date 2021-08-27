const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    isDone: {
        type: Boolean,
        default: false
    },
    day: { type: Number },
    contents : { type: String },

}, { timestamps: true });

const TodoModel = mongoose.model("todo", schema)

module.exports = TodoModel;