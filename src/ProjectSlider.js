import React, { useEffect, useState } from "react";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import "./ProjectSlider.css";
import db from "./Firebase";

function ProjectSlider() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    db.collection("projects")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setProjects(data);
      });
  }, []);
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider className="projectslider1" {...settings1}>
        {projects.map((project)=>(
          <>
          {console.log(projects)}
          <div key={project.id} className="projectslider__card">
          <Card className="projectslider__root">
            <CardMedia
              className="card__img"
              component="img"
              height="100%"
              image={project.src}
            />
            <CardContent className="project__details">
              <div>
                <h5 className="projectslider__project">Project</h5>
                <p className="projectslider__projectname">{project.name}</p>
              </div>
              <div>
                <h4 className="projectslider__project">Technology</h4>
                <p className="projectslider__projectname">
                  {project.technology}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
          </>
          
        )
        )}
      </Slider>

      <Slider className="projectslider2" {...settings2}>
        {projects.map((project)=>(
          <div key={project.id} className="projectslider2__card">
          <Card className="projectslider2__root">
            <CardContent className="project__details2">
              <div>
                <h5 className="projectslider2__projectname">
                  {project.name}
                </h5>
              </div>
              <div>
                <p className="projectslider2__project">Technology</p>
                <p className="projectslider2__projectname">
                  {project.technology}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        ))}
        

        <div className="projectslider2__card">
          <Card className="projectslider2__root">
            <CardContent className="project__details2">
              <div>
                <h5 className="projectslider2__projectname">
                  E-Commerce Website
                </h5>
              </div>
              <div>
                <p className="projectslider2__project">Technology</p>
                <p className="projectslider2__projectname">
                  React Js Node JS Express Js Firebase Stripe
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="projectslider2__card">
          <Card className="projectslider2__root">
            <CardContent className="project__details2">
              <div>
                <h5 className="projectslider2__projectname">Anonymous Chat</h5>
              </div>
              <div>
                <p className="projectslider2__project">Technology</p>
                <p className="projectslider2__projectname">React Js Firebase</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="projectslider2__card">
          <Card className="projectslider2__root">
            <CardContent className="project__details2">
              <div>
                <h5 className="projectslider2__projectname">Image Poll</h5>
              </div>
              <div>
                <p className="projectslider2__project">Technology</p>
                <p className="projectslider2__projectname">Flutter Firebase</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="projectslider2__card">
          <Card className="projectslider2__root">
            <CardContent className="project__details2">
              <div>
                <h5 className="projectslider2__projectname">Academics App</h5>
              </div>
              <div>
                <p className="projectslider2__project">Technology</p>
                <p className="projectslider2__projectname">Flutter Firebase</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="projectslider2__card">
          <Card className="projectslider2__root">
            <CardContent className="project__details2">
              <div>
                <h5 className="projectslider2__projectname">
                  Academics Portal
                </h5>
              </div>
              <div>
                <p className="projectslider2__project">Technology</p>
                <p className="projectslider2__projectname">Django Firebase</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="projectslider2__card">
          <Card className="projectslider2__root">
            <CardContent className="project__details2">
              <div>
                <h5 className="projectslider2__projectname">Student Help</h5>
              </div>
              <div>
                <p className="projectslider2__project">Technology</p>
                <p className="projectslider2__projectname">Django</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="projectslider2__card">
          <Card className="projectslider2__root">
            <CardContent className="project__details2">
              <div>
                <h5 className="projectslider2__projectname">
                  Certificate Generator
                </h5>
              </div>
              <div>
                <p className="projectslider2__project">Technology</p>
                <p className="projectslider2__projectname">Django</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="projectslider2__card">
          <Card className="projectslider2__root">
            <CardContent className="project__details2">
              <div>
                <h5 className="projectslider2__projectname">File Share</h5>
              </div>
              <div>
                <p className="projectslider2__project">Technology</p>
                <p className="projectslider2__projectname">Django</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="projectslider2__card">
          <Card className="projectslider2__root">
            <CardContent className="project__details2">
              <div>
                <h5 className="projectslider2__projectname">
                  DES Messaging App
                </h5>
              </div>
              <div>
                <p className="projectslider2__project">Technology</p>
                <p className="projectslider2__projectname">Flutter</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Slider>
    </div>
  );
}

export default ProjectSlider;
