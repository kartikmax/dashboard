import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { faker } from "@faker-js/faker";

let myArray = [];
for (var i = 0; i < 9; i++) {
  myArray.push(faker.color.rgb());
}

export default function RandomGrid() {
  const [customColor, setCustomColor] = useState(myArray);
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{ width: "400px", margin: "30px" }}>
        <Grid container spacing={1}>
          {customColor.map((x, y) => (
            <Grid
              item
              xs={4}
              style={{
                height: "30px",
                width: "30px",
                background: `${x}`,
                padding: "10px",
              }}
              alignContent="center"
            >
              {y + 1}
            </Grid>
          ))}
        </Grid>
      </Box>
      <button
        onClick={() => {
          setCustomColor(customColor.map(() => faker.color.rgb()));
        }}
      >
        {" "}
        randomise
      </button>
    </>
  );
}
