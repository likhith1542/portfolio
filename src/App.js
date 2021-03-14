import "./App.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Services from "./Services";
import {Link} from 'react-scroll'
import { Container} from 'react-floating-action-button'
import { IconButton } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


function App() {
  return (
    <div className="app">
      <Header/>
      <div className="home__container" >
      <Home/>
      </div>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Container className="backbtn__cont">
      <Link to="header" spy={true} smooth={true}><IconButton className="backbtn" >
        <ExpandLessIcon/>

      </IconButton></Link>
      {/* <Link to="services" spy={true} smooth={true}>Services</Link> */}
            {/* <Button
                tooltip="To top!"
                icon="fas fa-plus"
                rotate={true}
                onClick={() => alert('FAB Rocks!')} /> */}
        </Container>
    </div>
  );
}

export default App;
