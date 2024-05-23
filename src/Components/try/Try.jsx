import React, { useState, useEffect } from "react";
import axios from "axios";

const AppointmentComponent = () => {
  const [appointmentData, setAppointmentData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointmentData = async () => {
      try {
        const response = await axios.get(
          " https://staging.terminister.de/wp-admin/admin-ajax.php?action=wpamelia_api&call=/api/v1appointments&dates=2023-05-09,2023-05-10&page=1&skipServices=1&skipProviders=1",
          {
            headers: {
              Amelia: "x9+y9Sl4INrbnye8OF6R+iiu4UNCi51xG4M9MqCI6NHR",
            },
          }
        );
        setAppointmentData(response);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointmentData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!appointmentData) {
    return <div>Loading...</div>;
  }

  console.log(appointmentData);

  return (
    <div>
      <h2>Appointment Details</h2>
    </div>
  );
};

export default AppointmentComponent;
