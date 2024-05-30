import React, { useContext } from "react";
import { LoginContext } from "../../Context/LoginContext";
import { motion } from "framer-motion";
import { fadeIn } from "./variant";

const Login = () => {
  const { setUserName, setProfile } = useContext(LoginContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(true);
  };

  return (
    <section>
      <motion.form
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="login-from card animate"
        onSubmit={handleSubmit}
      >
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button className="login-btn" type="submit">
          Login
        </button>
      </motion.form>
    </section>
  );
};

export default Login;
