import React from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_items">
        <a href="#" className="logo">
          Appointment
        </a>
        <ul className="nav_links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="icon">
          <IoMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
