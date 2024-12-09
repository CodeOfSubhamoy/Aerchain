import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddTripForm from "./AddTripForm";
import { Typography } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "35vw",
  height: "50vh",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 2,
  overflow: "auto",
};

export default function AddModal({ openAddModal, setAddModalOpen }) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setAddModalOpen(!open);
  };
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modalClass">
          <div className="formHeader">
            <Typography sx={{ fontSize: "20px" }}>Add Trip</Typography>
            <Button onClick={handleClose}>x</Button>
          </div>
          <AddTripForm setAddModalOpen={setAddModalOpen} open={open} />
        </Box>
      </Modal>
    </div>
  );
}
