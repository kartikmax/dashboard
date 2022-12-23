import { Card, Grid ,Typography} from "@material-ui/core";
import React from "react";
import CustomBtn from "./CustomComponents/CustomBtn";
import DetailsCard from "./CustomComponents/DetailsCard";
import { createStyles, makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
    cardStyle: {
      borderRadius: "10px",
      padding: "15px 15px 0 15px",
    },
  })
);

const App = () => {
  const classes=useStyles();
  return (
    <>
      hello world
      <Grid container justifyContent="space-around">
        <Grid container xs={12} spacing={3} alignItems="center" justifyContent="flex-start">
          <Grid item>analytics</Grid>
          <Grid item>
            <CustomBtn>24 hrs</CustomBtn>
          </Grid>
          <Grid item>
            <CustomBtn>7 days</CustomBtn>
          </Grid>
          <Grid item>
            <CustomBtn>1 month</CustomBtn>
          </Grid>
          <Grid item>
            <CustomBtn>custom </CustomBtn>
          </Grid>
        </Grid>
        {/* issues tabs */}
        <Grid container xs={12} spacing={3}>
        <Grid  item xs={7} alignContent="space-around">
          <Card elevation={3} className={classes.cardStyle}>
            <Grid container xs={12}>
              <Typography variant="h4" color="primary">
                Issues
              </Typography>
            </Grid>
            <Grid container xs={12} spacing={3}>
              <Grid item xs={3}>
                <DetailsCard />
              </Grid>
              <Grid item xs={3}>
                <DetailsCard />
              </Grid>
              <Grid item xs={3}>
                <DetailsCard />
              </Grid>
              <Grid item xs={3}>
                <DetailsCard />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card elevation={3} className={classes.cardStyle}>
            <Grid container xs={12}>
              <Typography variant="h4" color="primary">
                Average of all Agents
              </Typography>
            </Grid>
            <Grid container xs={12} spacing={3}>
              <Grid item xs={6}>
                {" "}
                <DetailsCard />{" "}
              </Grid>
              <Grid item xs={6}>
                {" "}
                <DetailsCard />{" "}
              </Grid>
            </Grid>
          </Card>
        </Grid>
        </Grid>
        <Grid container xs={12}>
          <Grid container xs={4}>
            chart
          </Grid>
          <Grid container xs={4}>
            my open issues
          </Grid>
          <Grid container xs={4}>
            unassinged issues 
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
