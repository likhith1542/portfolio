import React from "react";
import "./Services.css";
import "react-circular-progressbar/dist/styles.css";
import SerSlider from "./SerSlider";

function Services() {
  
  return (
    <div id="services" className="services">
      <div className="services2">
        <div className="services3">
          <h1 className="services__heading">Services</h1>
          <div className="services__extradiv">
            <p className="services__extra">
              These are the services I am currently providing. If you feel that
              I can do the project other than these, Make sure you contact Me.
            </p>
          </div>
          <div className="serviceslider__div">
            <div className="service__card" >
              <img src="https://res.cloudinary.com/vcorner1/image/upload/v1606996306/Web_dev_uy0lrn.png" alt="" />
              <h4 className="service__name" >Web Development</h4>
            </div>
            <div className="service__card" >
              <img src="https://res.cloudinary.com/vcorner1/image/upload/v1606998315/app_dev_q72vfc.png" alt="" />
              <h4 className="service__name" >App Development</h4>
            </div>
            <div className="service__card" >
              <img src="https://res.cloudinary.com/vcorner1/image/upload/v1606996306/Web_dev_uy0lrn.png" alt="" />
              <h4 className="service__name" >Full Stack Tutoring</h4>
            </div>
          </div>
          <div className="service__slider">
            <SerSlider/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
