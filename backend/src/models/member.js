const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: { type: String },
    sex: { type: String },
    day: { type: String },
    time : { type: String },
}, { timestamps: true });

const MemberModel = mongoose.model("member", schema)

module.exports = MemberModel;