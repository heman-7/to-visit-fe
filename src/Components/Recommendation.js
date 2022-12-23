import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Recommendation = (props) => {
  return (
    <div style={{ flex: 1 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            {props.city}
          </Typography>
          <Typography sx={{ mb: 0.5 }} color="text.secondary">
            {props.attraction}
          </Typography>
          <Typography variant="body2">{props.month}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default Recommendation;
