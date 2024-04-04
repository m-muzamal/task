import { TextField } from "@mui/material";
import React, { useEffect } from "react";

const AddAppointment = ({ handleClose }) => {
  return (
    <section className="add_appointment">
      <div className="add_content">
        <h1>Add Appointment</h1>
        <div className="form">
          <TextField
            label="Somthing"
            size="small"
            variant="outlined"
            required
          />
          <TextField
            label="Somthing"
            size="small"
            variant="outlined"
            required
          />
          <div className="btns">
            <button type="button" className="btn" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddAppointment;
