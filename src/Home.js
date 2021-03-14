import React from "react";
import "./Home.css";
import { FiInstagram } from "react-icons/fi";
import { GrGithub, GrLinkedin } from "react-icons/gr";
import { IconButton } from "@material-ui/core";
function Home() {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  
  return (
    <div id="home" className="home">
      <div className="home__sociallinks">
        <IconButton onClick={() => openInNewTab('https://www.instagram.com/likhith.garapati/')} className="home__socialbutton">
          <FiInstagram />
        </IconButton>
        <IconButton onClick={() => openInNewTab('https://www.linkedin.com/in/likhith-garapati/')} className="home__socialbutton">
          <GrLinkedin />
        </IconButton>
        <IconButton onClick={() => openInNewTab('https://github.com/likhith1542')} className="home__socialbutton">
          <GrGithub />
        </IconButton>
      </div>
      <div className="home__name">
        <h1 className="name">I'm Likhith</h1>
        <p>Full stack and App developer</p>
        <p>Tutor</p>
        <div media="(max-width: 648px)" className="home__sociallinks1">
        <IconButton onClick={() => openInNewTab('https://www.instagram.com/likhith.garapati/')} className="home__socialbutton">
          <FiInstagram />
        </IconButton>
        <IconButton onClick={() => openInNewTab('https://www.linkedin.com/in/likhith-garapati/')} className="home__socialbutton">
          <GrLinkedin />
        </IconButton>
        <IconButton onClick={() => openInNewTab('https://github.com/likhith1542')} className="home__socialbutton">
          <GrGithub />
        </IconButton>
        </div>
        <img className="home__svg" src="https://res.cloudinary.com/vcorner1/image/upload/v1610259667/Untitled_design_2_fk0axn.svg" alt="" />
        <img className="home__svg1" src="https://res.cloudinary.com/vcorner1/image/upload/v1610259667/Untitled_design_2_fk0axn.svg" alt="" />
      </div>
    </div>
  );
}

export default Home;
