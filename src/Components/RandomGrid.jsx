import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { faker } from "@faker-js/faker";

export default function RandomGrid() {
  const [customColor, setCustomColor] = useState([
    faker.color.rgb(),
    faker.color.rgb(),
    faker.color.rgb(),
    faker.color.rgb(),
    faker.color.rgb(),
    faker.color.rgb(),
    faker.color.rgb(),
    faker.color.rgb(),
    faker.color.rgb(),
  ]);
  console.log(customColor);
  const Item = styled(Paper)(() => ({
    background: `${customColor}`,
    color: "white",
    padding: "10px",
    textAlign: "center",
    //   color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ width: "400px", margin: "30px" }}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <Item style={{ background: `${customColor[0]}`}}>1 </Item>
          </Grid>
          <Grid item xs={4}>
            <Item style={{ background: `${customColor[1]}`}}>2 </Item>
          </Grid>
          <Grid item xs={4}>
            <Item style={{ background: `${customColor[2]}`}}>3</Item>
          </Grid>
          <Grid item xs={4}>
            <Item style={{ background: `${customColor[3]}`}}>4 </Item>
          </Grid>
          <Grid item xs={4}>
            <Item style={{ background: `${customColor[4]}`}}>5 </Item>
          </Grid>
          <Grid item xs={4}>
            <Item style={{ background: `${customColor[5]}`}}>6 </Item>
          </Grid>
          <Grid item xs={4}>
            <Item style={{ background: `${customColor[6]}`}}>7 </Item>
          </Grid>
          <Grid item xs={4}>
            <Item style={{ background: `${customColor[7]}`}}>8 </Item>
          </Grid>
          <Grid item xs={4}>
            <Item style={{ background: `${customColor[8]}`}}>9 </Item>
          </Grid>
        </Grid>
      </Box>
      <button
        onClick={() => {
          setCustomColor([
            faker.color.rgb(),
            faker.color.rgb(),
            faker.color.rgb(),
            faker.color.rgb(),
            faker.color.rgb(),
            faker.color.rgb(),
            faker.color.rgb(),
            faker.color.rgb(),
            faker.color.rgb(),
          ]);
        }}
      >
        {" "}
        randomise
      </button>
    </>
  );
}
