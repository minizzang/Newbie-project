import { useState } from "react";

const Hello = function ({age}) {
  console.log(age);
  const [name, setName] = useState('Mike');
  const msg = age>19? "성인" : "미성년자";

  function changeName() {
    const newName = name === "Mike" ? "Jane" : "Mike";
    setName(newName);
  }

  // function showText(e) {
  //   console.log(e.target.value);  //event 객체
  // }

  return (
      <div>
          <h1 id="name">{name}({age}) : {msg}</h1>
          <button onClick={changeName}>Change</button>
          {/* <input type="text" onChange={showText}/> */}
      </div>
  )
}

export default Hello;