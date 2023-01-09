import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { faker } from "@faker-js/faker";


export default function RandomGrid() {
  let myArray=[]
  for(var i=0;i<9;i++){
    myArray.push(faker.color.rgb())
  }
  const [customColor, setCustomColor] = useState(myArray);
  console.log(customColor);
  const Item = styled(Paper)(() => ({
    background: `${customColor}`,
    color: "black",
    padding: "10px",
    textAlign: "center",
    //   color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ width: "400px", margin: "30px" }}>
        <Grid container spacing={1}>
        {customColor.map((x,y)=><Grid item xs={4}>
            <Item style={{background:`${x}`}}>
                {y+1}
            </Item>
        </Grid>)}

        </Grid>
      </Box>
      <button
        onClick={() => {
          setCustomColor(customColor.map(()=>faker.color.rgb()));
        }}
      >
        {" "}
        randomise
      </button>
    </>
  );
}
