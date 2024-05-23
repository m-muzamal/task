import { TextField } from "@mui/material";
import React, { useEffect } from "react";

const AddAppointment = ({ handleClose }) => {
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Amelia", "XldbLuwlIl9rZ4BdGBRlowmkm21e0Bfy9eEzr6OKMM9D");

    const raw = JSON.stringify({
      bookingStart: "2024-04-26 14:00",
      bookings: [
        {
          customFields: '{"1":{"label":"text","value":"","type":"text"}}',
          customerId: 2,
          duration: 1800,
          extras: [],
          packageCustomerId: null,
          persons: 1,
          status: "approved",
        },
      ],
      internalNotes: "",
      lessonSpace: "",
      locationId: 1,
      notifyParticipants: 1,
      providerId: 5,
      recurring: [],
      serviceId: 1,
      timeZone: "Europe/Belgrade",
      utc: true,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://staging.terminister.de/wp-admin/admin-ajax.php?action=wpamelia_api&call=/api/v1/appointments",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="add_appointment">
      <div className="add_content">
        <h1>Add Appointment</h1>
        <form className="form">
          <TextField label="Data" size="small" variant="outlined" required />
          <TextField label="Data2" size="small" variant="outlined" required />
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
