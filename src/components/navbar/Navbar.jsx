import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>TextUtils</h2>
      <ul className="menu">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
