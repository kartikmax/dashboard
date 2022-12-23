import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";

const style = {
  root: {
    backgroundColor: `${indigo[400]}`,
    borderRadius: "20px",
    "&:hover": {
      backgroundColor: `${indigo[800]}`
    }
  },
  label: {
    color: "white",
    textTransform: "none",
    fontSize: "1.2em"
  }
};

const MyButton = ({ children, classes }) => {
  return (
    <Button
      variant="contained"
      classes={{ root: classes.root, label: classes.label }}
    >
      {children}
    </Button>
  );
};

export default withStyles(style)(MyButton);