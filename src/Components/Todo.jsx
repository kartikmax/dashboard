import React, { useState } from "react";
import RandomGrid from "./RandomGrid";

const Print = ({ text }) => {
  return <div>{text}</div>;
};

const Tile = ({ color }) => {
  return (
    <div style={{ height: "30px", width: "30px", background: `${color}` }} />
  );
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
  console.log(myArray);

  return (
    <>
      <RandomGrid/>
      <div>
      <input type="color" value={textList} onChange={handleChange} />
      <button onClick={handleCaptureText}>submit</button>
      <button
        onClick={() => {
          setTextList("");
        }}
      >
        clear
      </button>
      <ol>
        {myArray.map((x) => (
          <Tile color={x} />
        ))}
      </ol>
      </div> 
    </>
  );
};

export default Todo;
