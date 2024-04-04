import { TextField } from "@mui/material";
import React from "react";

const AddAppointment = ({ handleClose }) => {
  return (
    <section className="add_appointment">
      <div className="add_content">
        <h1>Add Appointment</h1>
        <form className="form">
          <TextField label="Name" size="small" variant="outlined" required />
          <div className="btns">
            <button type="submit">Submit</button>
            <button type="button" className="btn" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddAppointment;
