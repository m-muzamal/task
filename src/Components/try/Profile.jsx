import React, { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";

const Profile = () => {
  const { username } = useContext(LoginContext);
  return (
    <section>
      <div className="profile card">
        <h1>Profile</h1>
        <h3>Username: {username}</h3>
      </div>
    </section>
  );
};

export default Profile;
