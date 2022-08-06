import React from "react";
import "../../style/Home/Course.css";
import { CourseData } from "../../assets/courseData";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";

function Course() {
  return (
    <div className="course-container" id="courses">
      <Fade bottom delay={400}>
        <h1 className="course-head">Our Courses</h1>
      </Fade>
      <div className="math course">
        {CourseData.map((courseList, key) => (
          <Fade bottom delay={400} key={key}>
            <div className="course-card" key={key}>
              <div className="imgBox">
                <img src={courseList.image} alt="" />
              </div>
              <div className="course-card-txt">
                <h2>{courseList.title}</h2>
                <p>{courseList.info}</p>
              </div>
            </div>
          </Fade>
        ))}
        <Fade bottom delay={400}>
          <div className="btn-container">
            <NavLink to='/teacher'>
              <button className="btn-home btn-home-course">
                Know your mentor  
              </button>
            </NavLink>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Course;
