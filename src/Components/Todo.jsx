import React, { useState } from "react";

const Print = () => {
  return <li>print component</li>;
};

const Todo = () => {
  const [num, setNum] = useState(0);
//   const [textList, setTextList] = useState();
  const [myArray, setMyArray] = useState([]);
  console.log(myArray);
  return (
    <div>
      {/* <input
        type="text"
        value={textList}
        onChange={(e) => {
          setTextList(e.target.value);
        }}
      /> */}
      <button
        onClick={() => {
          setNum((x) => x + 1);
          setMyArray([...myArray, num]);
        }}
      >
        click me{" "}
      </button>
      <ul>
        {myArray.map((x, y) => (
          <li key={x}>{y}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
