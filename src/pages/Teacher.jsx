import React from "react";
import "../style/Teacher.css";
import teacher1 from "../images/teacher1.jpg";
import teacher2 from "../images/teacher2.jpg";
import teacher3 from "../images/teacher3.jpg";
import teacher4 from "../images/teacher4.jpg";
import { Zoom } from "react-reveal";
import { Fade } from "react-reveal";
import { Helmet } from 'react-helmet'


function Teacher() {
  const getText = (event)=>{
    navigator.clipboard.writeText(event.target.textContent);
    alert( `${event.target.textContent} copied to clipboard`)
  }
  return (
    <div className="teacher-container">
      <Helmet>
        <title>SkyHeightz-Teachers</title>
        <meta name='description' content='SkyHeightz coaching classes - Know Mentors'></meta>
        <link rel="canonical" href="/teacher" />
</Helmet>
      <div className="teacher-head-container">
        <Zoom>
          <div className="teacher-head">
            <h1>DO SOMETHING GREAT</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
              ullam repellat, iure explicabo porro
            </p>
          </div>
        </Zoom>
      </div>
      <div className="teachers">
        <Fade bottom>
          <h1>Teachers</h1>
        </Fade>
        <Fade left>
          <div className="teacher">
            <div className="teacher-img">
              <img src={teacher1} alt="" />
            </div>
            <div className="teacher-info-media">
              <div className="teacher-info">
                <h1>Zafar Sir</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  amet deleniti animi numquam praesentium asperiores repudiandae
                  officia ad est perspiciatis, officiis autem iure quod
                  consequatur!
                </p>
              </div>
              <div className="teacher-media">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/login" target="_blank" rel="noreferrer">
                  <i className="fa  fa-twitter" aria-hidden="true"></i>
                </a>
                <p className="phone-number" onClick={getText}>
                  <span>
                    <strong>91 (7984975349)</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="teacher">
            <div className="teacher-img">
              <img src={teacher2} alt="" />
            </div>
            <div className="teacher-info-media">
              <div className="teacher-info">
                <h1>Zafar Sir</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  amet deleniti animi numquam praesentium asperiores repudiandae
                  officia ad est perspiciatis, officiis autem iure quod
                  consequatur!
                </p>
              </div>
              <div className="teacher-media">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/login" target="_blank" rel="noreferrer">
                  <i className="fa  fa-twitter" aria-hidden="true"></i>
                </a>
                <p className="phone-number" onClick={getText}>
                  <span>
                    <strong>91 (7984975349)</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade left>
          <div className="teacher">
            <div className="teacher-img">
              <img src={teacher3} alt="" />
            </div>
            <div className="teacher-info-media">
              <div className="teacher-info">
                <h1>Zafar Sir</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  amet deleniti animi numquam praesentium asperiores repudiandae
                  officia ad est perspiciatis, officiis autem iure quod
                  consequatur!
                </p>
              </div>
              <div className="teacher-media">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/login" target="_blank" rel="noreferrer">
                  <i className="fa  fa-twitter" aria-hidden="true"></i>
                </a>
                <p className="phone-number" onClick={getText}>
                  <span>
                    <strong>91 (7984975349)</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="teacher">
            <div className="teacher-img">
              <img src={teacher4} alt="" />
            </div>
            <div className="teacher-info-media">
              <div className="teacher-info">
                <h1>Zafar Sir</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                  amet deleniti animi numquam praesentium asperiores repudiandae
                  officia ad est perspiciatis, officiis autem iure quod
                  consequatur!
                </p>
              </div>
              <div className="teacher-media">
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://twitter.com/login" target="_blank" rel="noreferrer">
                  <i className="fa  fa-twitter" aria-hidden="true"></i>
                </a>
                <p className="phone-number" onClick={getText}>
                  <span>
                    <strong>91 (7984975349)</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Teacher;
