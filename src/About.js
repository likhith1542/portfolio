import React from "react";
import "./About.css";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function About() {
  return (
    <div id="about" className="about">
      <img
        className="about__img"
        src="https://res.cloudinary.com/vcorner1/image/upload/v1610259487/met_eggy9y.jpg"
        alt=""
      />
      <div className="about__right">
        <h1>About Me</h1>
        <div className="about__introduction">
          <p className="about__intro">
            I'm Likhith from India. I am a Full Stack and App developer.
            I develop websites using ReactJS, MERN and Django. I develop Apps using Flutter
            I constantly thrive to learn and apply. I love Open Source
            Communities, wanted to establish one of my own. Besides all this, I love
            Music and Cricket.
          </p>
          <div className="keyskill__heading">
            <CheckCircleOutlineIcon />
            <h4 className="about__keyskillsheader">Problem Solving</h4>
          </div>
          <ul className="skill__points" >
            <li className="point" >Finding optimistic way to solve problem</li>
            <li className="point" >Research on Problems</li>
            <li className="point" >Debugging Problems</li>
          </ul>
          
          <div className="keyskill__heading">
            <CheckCircleOutlineIcon />
            <h4 className="about__keyskillsheader">Fast Learner</h4>
          </div>
          <ul className="skill__points" >
            <li className="point" >Able to learn new skills quickly</li>
            <li className="point" >I prefer project based learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
