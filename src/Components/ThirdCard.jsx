import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const ThirdCard = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }} className="thirdCard">
        <CardContent className="firstContent">
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 20 }}
          >
            Delayed
          </Typography>
          <Typography variant="h5" component="div">
            18,033
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            In Transit
          </Typography>
          <Typography variant="h5" component="div">
            18,033
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Delivered
          </Typography>
          <Typography variant="h5" component="div">
            18,033
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThirdCard;
