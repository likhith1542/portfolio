import React from "react";
import "./Skills.css";
import "react-circular-progressbar/dist/styles.css";
import ImageSlider from "./Slider";

function Skills() {
  return (
    <div id="skills" className="skills">
      <div className="skills2">
        <div className="skills3">
          <h1 className="skills__heading">Skills</h1>
          <div className="skills__extradiv">
            <p className="skills__extra">
              This are the main technical skills I am possess. Other than these
              I am good at communicating with people,debugging errors and story
              writting.
            </p>
          </div>
          <div className="imageslider__div">
            <ImageSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
