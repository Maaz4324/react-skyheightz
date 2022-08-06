import React from "react";
import "../style/Contact.css";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_dknb9s1",
        "template_8dq7z4s",
        e.target,
        "crymrBWssvyArlchr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert(`Message sent!`);
  }
  return (
    <div className="contact-container">
      <Helmet>
        <title>SkyHeightz-Contact us</title>
        <meta
          name="description"
          content="SkyHeightz coaching classes - Connect with us"
        ></meta>
              <link rel="canonical" href="/contact" />
</Helmet>
      <div className="contact-head">
        <div className="contact-text">
          <h1>Connect with us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At modi
            perferendis cupiditate voluptatibus. Laudantium necessitatibus dicta
            mollitia accusamus impedit, incidunt provident excepturi ut nisi
            vero doloribus non natus asperiores aliquid?
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-map">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5250773825214!2d85.08054701498429!3d25.62069308370103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57a03f0aa0ab%3A0xdc2102d3a3b464d6!2sAshiana%20-%20Digha%20Rd%2C%20Rukanpura%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1651318790433!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <h1>E-Mail</h1>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="call">
            <h3>Call us</h3>
            <p>
              <span>91(5654-135-123)</span>
            </p>
            <p>
              <span>91(5654-135-123)</span>
            </p>
          </div>
          <div className="location">
            <h3>Location</h3>
            <p>
              <span>212 Rock street, 21 Avenue. New York. NY 165123</span>
            </p>
          </div>
          <div className="hour">
            <h3>Hours</h3>
            <p>
              <span>Mon-Fri_11am-8am Sat</span>
            </p>
            <p>
              <span>Sun_ 6am to 8am</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
