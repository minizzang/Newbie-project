const TodoModel = require("./models/member");

/*
Item example:
{
  name: "과제하기",
  done: false
}
*/

let ITEMS = [];
let ID_COUNTER = 1;

function getAll(callback) {
  // callback(ITEMS);

  TodoModel.find({}, (error, result) => {   //처음 인자는 filter용.
    callback(result);
  });
}

function add(name, callback) {
  // const newItem = {
  //   id: (ID_COUNTER++).toString(),
  //   name,
  //   done: false
  // };
  // ITEMS.push(newItem);
  // callback(newItem);

  const newItem = new TodoModel({
    name  //done은 디폴트
  });
  newItem.save((error, result) => {
    callback(result);  //사실은 error 핸들링 해야 함.
  })
}

function remove(id, callback) {
  // ITEMS = ITEMS.filter(v => v.id !== id);
  // callback();

  TodoModel.deleteOne({_id: id}, (error) => {
    callback();
  });
}

function setDone(id, callback) {
  // ITEMS = ITEMS.map(v => {
  //   if (v.id === id) {
  //     v.done = true;
  //   }
  //   return v;
  // });
  // callback();

  TodoModel.find({_id: id}, (error, result) => {   //처음 인자는 filter용.
    console.log(result[0].done)
    // if (result[0].done) {
    //   TodoModel.updateOne({_id: id}, {done: false}, () => {
    //     callback();
    //   });
    // }
    // else {
    //   TodoModel.updateOne({_id: id}, {done: true}, () => {
    //     callback();
    //   });
    // }

    TodoModel.updateOne({_id: id}, {done: !result[0].done}, () => {
      callback();
    });
  });

}

module.exports = {
  getAll,
  add,
  remove,
  setDone
};
