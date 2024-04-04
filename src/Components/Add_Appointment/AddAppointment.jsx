import { TextField } from "@mui/material";
import React, { useEffect } from "react";

const AddAppointment = ({ handleClose }) => {
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        // Prepare the request body
        const requestBody = {
          serviceId: "SERVICE_ID",
          customerId: "CUSTOMER_ID",
          startDateTime: "APPOINTMENT_START_DATETIME",
          endDateTime: "APPOINTMENT_END_DATETIME",
          status: "STATUS",
        };

        // Make the fetch request with the appropriate method and headers
        const response = await fetch(
          "https://staging.terminister.de/wp-admin/admin-ajax.php?action=wpamelia_api&call=/api/v1/appointments",
          {
            method: "POST", // Use POST method for sending data in request body
            headers: {
              "Content-Type": "application/json",
              Amelia: "x9+y9Sl4INrbnye8OF6R+iiu4UNCi51xG4M9MqCI6NHR",
            },
            body: JSON.stringify(requestBody), // Convert the body object to JSON string
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch appointments");
        }

        const data = await response.text();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

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
