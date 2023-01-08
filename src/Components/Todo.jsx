import React, { useState } from "react";

const Print = () => {
  return <li>print component</li>;
};

const Todo = () => {
  const [textList, setTextList] = useState();
  const [myArray, setMyArray] = useState([]);
  
  const handleChange = (e) => {
    setTextList(e.target.value);
  };
  const handleCaptureText = () => {
    setMyArray([...myArray, textList]);
  };

  return (
    <div>
      <input type="text" value={textList} onChange={handleChange} />
      <button onClick={handleCaptureText}>submit</button>
      <ul>
        {myArray.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
