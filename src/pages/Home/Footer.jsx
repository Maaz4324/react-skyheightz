import React from "react";
import "../../style/Home/Footer.css";

function Footer() {
  const getText = (event)=>{
    navigator.clipboard.writeText(event.target.textContent);
    alert( `${event.target.textContent} copied to clipboard`)
  }
  return (
    <div className="footer-container">
      <div className="media-logo">
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/login" target="_blank" rel="noreferrer">
          <i className="fa  fa-twitter" aria-hidden="true"></i>
        </a>
        <p className="phone-number"><span><strong  onClick={getText}>91 (7984975349)</strong> -contact us</span></p>
      </div>
      <div className="copyright-container">
        <p>
          <span>
            &copy; 2022 SkyHeightz Coaching Institute. All rights reserved
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
