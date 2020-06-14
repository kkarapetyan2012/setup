import React from "react";
import Slider from "react-slick";

import "./MainCarousel.scss";
import myButton from "../../components/button/Button";

const MainCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
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
    <div className="mainCarousel">
      <div className="center">
        <Slider {...settings}>
          <div className="slideItem">
            <div className="slideInfo">
              <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry 1.</h2>
              <myButton className="myButton">1</myButton>
            </div>
          </div>
          <div className="slideItem">
            <div className="slideInfo">
              <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry 2.</h2>
              <myButton className="myButton">2</myButton>
            </div>
          </div>
          <div className="slideItem">
            <div className="slideInfo">
              <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry 3.</h2>
              <myButton className="myButton">3</myButton>
            </div>
          </div>
          <div className="slideItem">
            <div className="slideInfo">
              <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry 4.</h2>
              <myButton className="myButton">4</myButton>
            </div>
          </div>
          <div className="slideItem">
            <div className="slideInfo">
              <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry 5.</h2>
              <myButton className="myButton">5</myButton>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );

  // return (
  //   <Carousel afterChange={onChange} className="mainCarousel" >
  //   <div className="slideItem">
  //     <div className="slideInfo">
  //       <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry 1.</h2>
  //       <Button type="primary">Primary Button</Button>
  //     </div>
  //   </div>
  //   <div className="slideItem">
  //     <div className="slideInfo">
  //       <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry 2.</h2>
  //       <Button type="primary">Primary Button</Button>
  //     </div>
  //   </div>
  //   <div className="slideItem">
  //     <div className="slideInfo">
  //       <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry 3.</h2>
  //       <Button type="primary">Primary Button</Button>
  //     </div>
  //   </div>
  //   <div className="slideItem">
  //     <div className="slideInfo">
  //       <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry 3.</h2>
  //       <Button type="primary">Primary Button</Button>
  //     </div>
  //   </div>
  // </Carousel>
  // )
};

export default MainCarousel;
