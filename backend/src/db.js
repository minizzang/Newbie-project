const DayModel = require("./models/day");
const MemberModel = require("./models/member");

function getAll_member(callback) {
  MemberModel.find({}, (error, result) => {   //처음 인자는 filter용.
    callback(result);
  });
}

function getOne_member(id, callback) {
  MemberModel.find({_id: id}, (error, result) => {
    callback(result);
  });
}

function get_membersByTime(time, callback) {
  MemberModel.find({time: time}, (error, result) => {
    callback(result);
  });
}

function get_memberByTimeDay(time, day, callback) {
  MemberModel.find( { $and: [{ time: time }, { day: day }] } , (error, result) => {
    callback(result);
  });
}

function getAll_day(callback) {

  DayModel.find({}, (error, result) => {
    callback(result);
  });
}

function deleteByDay(day, callback) {
  DayModel.deleteOne({day: day}, (error) => {
    callback();
  });
}

function deleteById(id, callback) {
  MemberModel.deleteOne({_id: id}, (error) => {
    callback();
  });
}


function add_day(day, callback) {
  const newItem = new DayModel({
    day
  });
  newItem.save((error, result) => {
    callback(result);  //사실은 error 핸들링 해야 함.
  })
}

function add_member(contents, callback) {
  const newItem = new MemberModel({
    name : contents.name,
    sex : contents.sex,
    day : contents.day,
    time : contents.time,
  });
  // console.log(newItem)
  newItem.save((error, result) => {
    callback(result);  //사실은 error 핸들링 해야 함.
  })
}



function setDone(id, callback) {

  DayModel.find({_id: id}, (error, result) => {   //처음 인자는 filter용.
    console.log(result[0].done)

    DayModel.updateOne({_id: id}, {done: !result[0].done}, () => {
      callback();
    });
  });

}

function editMember(id, name, sex, day, time, callback) {

  MemberModel.find({_id: id}, (error, result) => {   //처음 인자는 filter용.
    MemberModel.updateOne({_id: id}, {$set: {name: name ,sex: sex, day: day ,time: time} }, () => {
      callback();
    });
  });

}

function editMemo(id, memo, callback) {

  MemberModel.find({_id: id}, (error, result) => {   //처음 인자는 filter용.
    MemberModel.updateOne({_id: id}, {$set: {memo : memo} }, () => {
      callback();
    });
  });

}

module.exports = {
  getAll_member,
  getOne_member,
  getAll_day,
  get_membersByTime,
  get_memberByTimeDay,
  add_day,
  add_member,
  deleteById,
  setDone,
  deleteByDay,
  editMember,
  editMemo
};
