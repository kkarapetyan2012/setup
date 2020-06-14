import React from "react";
import Slider from "react-slick";
import { settingsImg } from "../../assets/images/icons";

import "./GameCarousel.scss";

const GameCarousel = () => {
  const settings = {
    infinite: false,
    speed: 500,
    arrows: false,
    dots: false,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 973,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="gameCarousel">
      <h2>Best Casino Games</h2>
      <div className="divLeft" />
      <div className="divRight" />
      <Slider {...settings}>
        <a href="">
          <div className="slideItem">
            <img src={settingsImg} alt="" />
            <p>Virtual Sports</p>
          </div>
        </a>
        <a href="">
          <div className="slideItem">
            <img src={settingsImg} alt="" />
            <p>Other skill games</p>
          </div>
        </a>
        <a href="">
          <div className="slideItem">
            <img src={settingsImg} alt="" />
            <p>Live Casino</p>
          </div>
        </a>
        <a href="">
          <div className="slideItem">
            <img src={settingsImg} alt="" />
            <p>POWER-BALL</p>
          </div>
        </a>
        <a href="">
          <div className="slideItem">
            <img src={settingsImg} alt="" />
            <p>Lorem Ipsum</p>
          </div>
        </a>
        <a href="">
          <div className="slideItem">
            <img src={settingsImg} alt="" />
            <p>Lorem Ipsum</p>
          </div>
        </a>
        <a href="">
          <div className="slideItem">
            <img src={settingsImg} alt="" />
            <p>Lorem Ipsum</p>
          </div>
        </a>
      </Slider>
      
    </div>
  );
};

export default GameCarousel;
