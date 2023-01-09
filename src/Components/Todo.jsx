import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import RandomGrid from "./RandomGrid";

const Print = ({ text }) => {
  return <div>{text}</div>;
};

const Tile = ({ color }) => {
  return (
    <Grid item xs={4} style={{ height: "30px", width: "30px", background: `${color}`,padding:"10px" }} />
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
      <br/>
      <Box style={{width:"400px",margin:"30px"}}>
      <Grid container spacing={1}>
        {myArray.map((x) => (
          <Tile color={x} />
        ))}
      </Grid>
      </Box>
      </div> 
    </>
  );
};

export default Todo;
