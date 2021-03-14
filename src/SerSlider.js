import React from "react";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./SerSlide.css"

function SerSlider() {
  const settings5 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider className="serslider" {...settings5}>
        <div className="service__card">
          <img
            src="https://res.cloudinary.com/vcorner1/image/upload/v1606996306/Web_dev_uy0lrn.png"
            alt=""
          />
          <h4 className="service__name">Web Development</h4>
        </div>
        <div className="service__card">
          <img
            src="https://res.cloudinary.com/vcorner1/image/upload/v1606998315/app_dev_q72vfc.png"
            alt=""
          />
          <h4 className="service__name">App Development</h4>
        </div>
        <div className="service__card">
          <img
            src="https://res.cloudinary.com/vcorner1/image/upload/v1606996306/Web_dev_uy0lrn.png"
            alt=""
          />
          <h4 className="service__name">Full Stack Tutoring</h4>
        </div>
      </Slider>
    </div>
  );
}

export default SerSlider;
