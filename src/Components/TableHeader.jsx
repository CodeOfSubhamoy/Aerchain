import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const TableHeader = ({ selectedRow, setAddModalOpen }) => {
  const createTrip = () => {
    setAddModalOpen(true);
  };
  return (
    <Card className="tableHeader">
      <CardActionArea className="cardContent">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Trip list
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className="buttonContainer">
        <Button
          id="updateBtn"
          variant="outlined"
          disabled={!selectedRow || Object.keys(selectedRow).length === 0}
        >
          Update Status
        </Button>
        <Button id="addBtn" variant="contained" onClick={createTrip}>
          Add Trip
        </Button>
      </div>
    </Card>
  );
};

export default TableHeader;
