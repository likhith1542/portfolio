import React, { useEffect, useState } from "react";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import db from "./Firebase";

function ImageSlider() {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    db.collection("skills")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        setSkills(data);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      {/* <h1>Image Carousel</h1> */}
      <Slider className="slider__triple" {...settings}>
        {skills.map((skill)=>(
          <>
          <div>
          <Card className="slider__root">
            <CardMedia
              className="slider__media"
              image={skill.src}
            />
            <CardContent>
              <h4 className="slider__skill" >{skill.name}</h4>
            </CardContent>
          </Card>
        </div>
          </>
        ))}
      </Slider>
      <Slider className="slider__single" {...settings1}>

        {skills.map((skill)=>(
          <div className="slider__card" >
          <Card className="slider__root">
            <CardMedia
              className="slider__media"
              image={skill.src}
            />
            <CardContent>
              <h4 className="slider__skill" >{skill.name}</h4>
            </CardContent>
          </Card>
        </div>
        ))}

        
        <div>
          <Card className="slider__root">
            <CardMedia
              className="slider__media"
              image="https://res.cloudinary.com/vcorner1/image/upload/v1606981830/JS_e7e4t3.png"
            />
            <CardContent>
              {/* <Typography variant="body2" component="h2">
                HTML & CSS
              </Typography> */}
              <h4 className="slider__skill" >JavaScript</h4>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="slider__root">
            <CardMedia
              className="slider__media"
              image="https://res.cloudinary.com/vcorner1/image/upload/v1606981830/reactjs_geodoz.png"
            />
            <CardContent>
              {/* <Typography variant="body2" component="h2">
                HTML & CSS
              </Typography> */}
              <h4 className="slider__skill" >React JS</h4>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="slider__root">
            <CardMedia
              className="slider__media"
              image="https://res.cloudinary.com/vcorner1/image/upload/v1606981829/nodejs_epxetn.png"
            />
            <CardContent>
              {/* <Typography variant="body2" component="h2">
                HTML & CSS
              </Typography> */}
              <h4 className="slider__skill" >Node JS</h4>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="slider__root">
            <CardMedia
              className="slider__media"
              image="https://res.cloudinary.com/vcorner1/image/upload/v1606981829/express_inyslf.png"
            />
            <CardContent>
              {/* <Typography variant="body2" component="h2">
                HTML & CSS
              </Typography> */}
              <h4 className="slider__skill" >Express JS</h4>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="slider__root">
            <CardMedia
              className="slider__media"
              image="https://res.cloudinary.com/vcorner1/image/upload/v1606981830/Django_ipo5xx.png"
            />
            <CardContent>
              {/* <Typography variant="body2" component="h2">
                HTML & CSS
              </Typography> */}
              <h4 className="slider__skill" >Django</h4>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="slider__root">
            <CardMedia
              className="slider__media"
              image="https://res.cloudinary.com/vcorner1/image/upload/v1606981830/flutter_dtkrhx.png"
            />
            <CardContent>
              {/* <Typography variant="body2" component="h2">
                HTML & CSS
              </Typography> */}
              <h4 className="slider__skill" >Flutter</h4>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="slider__root">
            <CardMedia
              className="slider__media"
              image="https://res.cloudinary.com/vcorner1/image/upload/v1606981830/python_bvr0ye.png"
            />
            <CardContent>
              {/* <Typography variant="body2" component="h2">
                HTML & CSS
              </Typography> */}
              <h4 className="slider__skill" >Python</h4>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="slider__root">
            <CardMedia
              className="slider__media"
              image="https://res.cloudinary.com/vcorner1/image/upload/v1606981830/java_kdwlhh.png"
            />
            <CardContent>
              {/* <Typography variant="body2" component="h2">
                HTML & CSS
              </Typography> */}
              <h4 className="slider__skill" >Java</h4>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="slider__root">
            <CardMedia
              className="slider__media"
              image="https://res.cloudinary.com/vcorner1/image/upload/v1606981830/firebase_a4lqcr.png"
            />
            <CardContent>
              {/* <Typography variant="body2" component="h2">
                HTML & CSS
              </Typography> */}
              <h4 className="slider__skill" >Firebase</h4>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="slider__root">
            <CardMedia
              className="slider__media"
              image="https://res.cloudinary.com/vcorner1/image/upload/v1606981829/mongodb_jlv0vs.png"
            />
            <CardContent>
              {/* <Typography variant="body2" component="h2">
                HTML & CSS
              </Typography> */}
              <h4 className="slider__skill" >Mongo DB</h4>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="slider__root">
            <CardMedia
              className="slider__media"
              image="https://res.cloudinary.com/vcorner1/image/upload/v1606981829/mysql_llnu3j.png"
            />
            <CardContent>
              {/* <Typography variant="body2" component="h2">
                HTML & CSS
              </Typography> */}
              <h4 className="slider__skill" >MySQL</h4>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="slider__root">
            <CardMedia
              className="slider__media"
              image="https://res.cloudinary.com/vcorner1/image/upload/v1606981829/bootstrap_fhijry.png"
            />
            <CardContent>
              {/* <Typography variant="body2" component="h2">
                HTML & CSS
              </Typography> */}
              <h4 className="slider__skill" >BootStrap</h4>
            </CardContent>
          </Card>
        </div>
        
        
      </Slider>
    </div>
  );
}

export default ImageSlider;
