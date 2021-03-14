import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Header.css";
import { ReactComponent as CloseMenu } from "./x.svg";
import { ReactComponent as MenuIcon } from "./menu.svg";
import {Link} from 'react-scroll'


function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div id="header" className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <h1 className="header__name">Likhith</h1>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" >
            <Link to="header" onClick={closeMobileMenu} spy={true} smooth={true}>Home</Link>
          </li>
          <li className="option" >
            <Link to="about" onClick={closeMobileMenu} spy={true} smooth={true}>About</Link>
          </li>
          <li className="option" >
            <Link to="skills" onClick={closeMobileMenu} spy={true} smooth={true}>Skills</Link>
          </li>
          <li className="option" >
            <Link to="projects" onClick={closeMobileMenu} spy={true} smooth={true}>Projects</Link>
          </li>
          <li className="option" >
            <Link to="services" onClick={closeMobileMenu} spy={true} smooth={true}>Services</Link>
          </li>
          <li className="optionb">
            <Button onClick={() => openInNewTab('https://forms.gle/3HvVmdLgn44Yiryh8/')} >Hire Me</Button>
          </li>
        </ul>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
}

export default Header;
