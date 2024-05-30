import { useEffect, useState } from "react";
import "./App.css";
import Profile from "./Components/try/Profile";
import Login from "./Components/try/Login";
import Dictionary from "./Components/Dictionary/Dictionary";
// import Home from "./Components/Home/Home";
// import Navbar from "./Components/Navbar/Navbar";
// import AppointmentComponent from "./Components/try/Try";
import Try2 from "./Components/try/Try2";
import { LoginContext } from "./Context/LoginContext";

function App() {
  const [profile, setProfile] = useState(false);
  const [username, setUserName] = useState("");

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         // if (entry.isIntersecting) {
  //         console.log(entry.target, "item");
  //         entry.target.classList.toggle("animate");
  //         // }
  //       });
  //     },
  //     {
  //       threshold: 1,
  //     }
  //   );

  //   const cards = document.querySelectorAll(".card");

  //   cards.forEach((card) => {
  //     observer.observe(card);
  //   });

  //   return () => {
  //     cards.forEach((card) => {
  //       observer.unobserve(card);
  //     });
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <>
      {/* <AppointmentComponent /> */}
      {/* <Navbar /> */}
      {/* <Home /> */}
      <Dictionary />
      <Try2 />
      <LoginContext.Provider value={{ setProfile, username, setUserName }}>
        {profile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </>
  );
}

export default App;
