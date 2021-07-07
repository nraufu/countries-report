import React from "react";
import reportImg from "../../assets/images/reports.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/#">
          <img src={reportImg} alt="logo" width="30" height="24" />
          <h6>reports</h6>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
