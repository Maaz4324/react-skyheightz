import React from "react";
import "../../style/Home/Intro.css";
import { Zoom } from "react-reveal";
import { Fade } from "react-reveal";

function Intro() {
  return (
    <div className="home-intro-container">
      <div className="intro-text-container">
        <Zoom>
          <h1>Experience best teaching</h1>
          <h5>with our skilled teachers </h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            repudiandae dolorum soluta?
          </p>
        </Zoom>
        <Fade bottom>
          <a href="#courses">
            <button className="btn-home">Learn more</button>
          </a>
        </Fade>
      </div>
    </div>
  );
}

export default Intro;
