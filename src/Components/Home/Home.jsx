import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "./Item";
import AddAppointment from "../Add_Appointment/AddAppointment";

const Home = () => {
  const [popup, setPopup] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "https://staging.terminister.de/wp-admin/admin-ajax.php?action=wpamelia_api&call=/api/v1/appointments&dates=2023-05-09,2023-05-10&page=1&skipServices=1&skipProviders=1",
          {
            headers: {
              // Authorization: "x9+y9Sl4INrbnye8OF6R+iiu4UNCi51xG4M9MqCI6NHR",
              Amelia: "x9+y9Sl4INrbnye8OF6R+iiu4UNCi51xG4M9MqCI6NHR",
            },
          }
        );

        setAppointments(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  // console.log(appointments);

  const handleClick = () => {
    setPopup(!popup);
  };

  return (
    <>
      {popup && <AddAppointment handleClose={handleClick} />}
      <section>
        <div className="container home">
          <div className="top">
            <h1>Apointments</h1>
            <button onClick={handleClick}>Add Appointment</button>
          </div>
          <div className="content">
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              <>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
              </>
            )}
            <button>Load more...</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
