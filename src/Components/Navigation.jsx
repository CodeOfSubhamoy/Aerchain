import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import BlurOnOutlinedIcon from "@mui/icons-material/BlurOnOutlined";

const Navigation = () => {
  return (
    <AppBar position="static" color="white">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <BlurOnOutlinedIcon />
        </IconButton>
        <Typography variant="h6" component="div">
          Aerchain
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
