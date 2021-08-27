const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    day: { type: Number },
}, { timestamps: true });  //createdAt, updatedAt을 몽고디비가 알아서 관리해 줌.

const DayModel = mongoose.model("day", schema)

module.exports = DayModel;