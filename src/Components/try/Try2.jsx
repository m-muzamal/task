import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Redux/dataSlice/dataSlice";
import { motion } from "framer-motion";
import { fadeIn } from "./variant";

const Try2 = () => {
  const { value } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [err, setErr] = useState("");

  const setMsg = (msg) => {
    setErr(msg);
    setTimeout(() => {
      setErr("");
    }, 2000);
  };

  const handleMinus = () => {
    if (value > 0) {
      dispatch(decrement());
    } else {
      setMsg("Minimum value is zero. Cannot decrease further!");
    }
  };

  return (
    <section>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="try2"
      >
        <h1>Counter</h1>
        {err && <p className="msg">{err}</p>}
        <div className="counter">
          <h1 className="result">{value}</h1>
          <button
            className="counter-btn left"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button className="counter-btn right" onClick={handleMinus}>
            -
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Try2;
