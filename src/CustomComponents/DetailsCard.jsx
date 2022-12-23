import { Typography } from "@material-ui/core";
import React from "react";

const DetailsCard = () => {
  return (
    <>
      <Typography variant="h6" style={{ fontWeigtht: "bold" }}>
        New Open Issues
      </Typography>
      <Typography variant="h4" style={{ color: "blue" }}>
        120
      </Typography>
      <Typography variant="body1">in 7 days</Typography>
      <Typography
        // variant="h5" 
        display="inline"
        style={{
          background: "yellow",
          padding: "4px",
          borderRadius: "30%",
          fontSize: "20px",
        }}
      >
        +21
      </Typography>
      <Typography variant="body2" display="inline">
        last 7 days
      </Typography>
    </>
  );
};

export default DetailsCard;
