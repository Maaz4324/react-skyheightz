import React from "react";
import '../style/Navbar.css'
import {NavLink} from 'react-router-dom'
 
function Navbar() {
  return (
    //   Navbar container
    <div className="navbar-container">
        {/* Bootstrap Navbar */}
      <div className="navbar navbar-expand-lg navbar-dark bg-dark" sticky="top">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">
            SkyHeightz
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " activeClassName="active-link"  aria-current="page" to='/home'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " activeClassName="active-link" to='/gallery'>
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " activeClassName="active-link" to='/teacher'>
                  Teachers
                </NavLink>
              </li>
              <li className="nav-item"> 
                <NavLink className="nav-link " activeClassName="active-link" to='/contact'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
