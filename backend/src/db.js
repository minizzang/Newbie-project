const DayModel = require("./models/day");
const TodoModel = require("./models/todo");

function getAll(callback) {

  DayModel.find({}, (error, result) => {   //처음 인자는 filter용.
    callback(result);
  });
}

function deleteByDay(day, callback) {
  DayModel.deleteOne({day: day}, (error) => {
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

function add_todo(contents, callback) {
  const newItem = new TodoModel({
    contents
  });
  newItem.save((error, result) => {
    callback(result);  //사실은 error 핸들링 해야 함.
  })
}

function remove(id, callback) {

  DayModel.deleteOne({_id: id}, (error) => {
    callback();
  });
}

function setDone(id, callback) {

  DayModel.find({_id: id}, (error, result) => {   //처음 인자는 filter용.
    console.log(result[0].done)

    DayModel.updateOne({_id: id}, {done: !result[0].done}, () => {
      callback();
    });
  });

}

module.exports = {
  getAll,
  add_day,
  add_todo,
  remove,
  setDone,
  deleteByDay
};
