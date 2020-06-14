import React from "react";
import Slider from "react-slick";

import "./ClientsTestimonialsCarousel.scss";

const ClientsTestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="clientsTestimonialsCarousel">
      <div className="title">Clients &#x26; Testimonials</div>
      <Slider {...settings}>
        <div className="slideItem">
          <div className="slideInfo">
            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry.1</h2>
            <a href="">Lorem Ipsum</a>
          </div>
        </div>
        <div className="slideItem">
          <div className="slideInfo">
            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry.2</h2>
            <a href="">Lorem Ipsum</a>
          </div>
        </div>
        <div className="slideItem">
          <div className="slideInfo">
            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry.3</h2>
            <a href="">Lorem Ipsum</a>
          </div>
        </div>
        <div className="slideItem">
          <div className="slideInfo">
            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry.4</h2>
            <a href="">Lorem Ipsum</a>
          </div>
        </div>
        <div className="slideItem">
          <div className="slideInfo">
            <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled Lorem Ipsum is simply dummy text of the printing and typesetting industry.5</h2>
            <a href="">Lorem Ipsum</a>
          </div>
        </div>
      </Slider>
      
    </div>
  );

};

export default ClientsTestimonialsCarousel;
