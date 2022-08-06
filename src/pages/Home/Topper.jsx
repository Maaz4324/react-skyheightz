import React from "react";
import { Toppers } from "../../assets/topperData";
import "../../style/Home/Topper.css";
import { Fade } from "react-reveal";

function Topper() {
  return (
    <div className="topper-container">
      <Fade bottom delay={400}>
        <div className="topper-txt-container">
        <h1>Our Successful Students</h1>
        <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi ipsam excepturi architecto.</span></p>

        </div>
      </Fade>
      <div className="topper-list-container">
        <div className="toppers-list">
        {Toppers.map((topperList, key) => (
          <Fade bottom delay={400} key={key}>
            <div className="topper-card">
              <div className="img">
                <img src={topperList.image} alt="" />
              </div>
              <div className="topper-card-txt">
                <h2>{topperList.name}</h2>
                <p>
                  <span>{topperList.about}</span>
                </p>
              </div>
            </div>
          </Fade>
        ))}
        </div>
        
      </div>
    </div>
  );
}

export default Topper;
