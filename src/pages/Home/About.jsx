import React from "react";
import { Zoom } from "react-reveal";
import "../../style/Home/About.css";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      <Zoom>
        <div className="about-txt-container">
          <div className="about-txt">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              maxime rerum iste assumenda amet incidunt perspiciatis nulla
              impedit totam eaque! Mollitia, officia modi!
            </p>
            <NavLink to="/gallery">
              <button className="btn-home">Jump to Gallery</button>
            </NavLink>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default About;
