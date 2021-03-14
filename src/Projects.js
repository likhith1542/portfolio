import React from "react";
import "./Projects.css";
import "react-circular-progressbar/dist/styles.css";
import ProjectSlider from "./ProjectSlider";

function Projects() {
  return (
    <div id="projects" className="projects">
      <div className="projects2">
        <div className="projects3">
          <h1 className="projects__heading">Projects</h1>
          <div className="projects__extradiv">
            <p className="projects__extra">
              This are some of the projects I have worked on till date. There are many other projects like tinder clone, Zoom clone and many more.
            </p>
            
          </div>
          <div className="projectslider__div">
          <ProjectSlider />
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Projects;
