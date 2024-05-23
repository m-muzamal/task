import React, { useEffect, useState } from "react";
import Item from "./Item";
import AddAppointment from "../Add_Appointment/AddAppointment";
import { useGetAppointmentsQuery } from "../../RTK/apiSlice/appointmentsSlice";

const Home = () => {
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const res = useGetAppointmentsQuery({
    dates: "2023-05-09,2023-05-10",
    page: 1,
    skipServices: true,
    skipProviders: true,
  });
  // console.log(res);

  // useEffect(() => {
  //   fetch(
  //     "https://staging.terminister.de/wp-admin/admin-ajax.php?action=wpamelia_api&call=/api/v1/appointments",
  //     {
  //       method: "GET",
  //       headers: {
  //         Amelia: "x9+y9Sl4INrbnye8OF6R+iiu4UNCi51xG4M9MqCI6NHR",
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.error("Error:", err));
  // }, []);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Amelia", "XldbLuwlIl9rZ4BdGBRlowmkm21e0Bfy9eEzr6OKMM9D");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://staging.terminister.de/wp-admin/admin-ajax.php?action=wpamelia_api&call=/api/v1/appointments",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, []);

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
