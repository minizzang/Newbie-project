const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    done: {
        type: Boolean,
        default: false
    },
    day : Number,
    name: String,
}, { timestamps: true });  //createdAt, updatedAt을 몽고디비가 알아서 관리해 줌.

const MemberModel = mongoose.model("member", schema)

module.exports = MemberModel;