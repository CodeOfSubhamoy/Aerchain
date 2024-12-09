import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

const SecondCard = () => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }} className="secondCard">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 20 }}
          >
            Delivered
          </Typography>
          <Typography variant="h5" component="div">
            18,033
          </Typography>
        </CardContent>
        <CardContent>
          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="determinate"
              value={80}
              thickness={8}
              size={50}
              sx={{ color: "green" }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="caption"
                component="div"
                sx={{ color: "text.secondary" }}
              >
                {`80%`}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h5" component="div">
            Ontime: 1,23,456
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default SecondCard;
