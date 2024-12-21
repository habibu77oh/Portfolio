import React from "react";
import "./about.css";
import aboutImg from "../../assets/man-icon.jpg";
import CV from "../../assets/CV.png";
import Info from "./Info.jsx";

function About() {
  return (
    <div className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={aboutImg} alt="" className="about__img"/>

        <div className="about__data">
          <Info />
          <p className="about__description">
            I am Habibulloh Zekirullayev, residing in Uzbekistan. I am a beginer
            frontend developer and currently a student, also working as a
            frontend freelancer. I take responsibility for the tasks assigned to
            me, and my goal is to work on large-scale projects.
          </p>
          <a download="" href={CV} className="button button--flex">See Experience</a>

        </div>
      </div>
    </div>
  );
}

export default About;
