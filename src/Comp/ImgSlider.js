import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="./images/slider-badag.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-scale.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="./images/slider-scales.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;
ul li button{
    &:before{
        font-size:10px;
        color:rgb(150,158,171);
    }
}

li.slick-active button:before{
    color:white;
}

button{
    z-index:1;
}
.slick-list{
      overflow:visible;
`;
const Wrap = styled.div`
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 4px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition-duration: 250ms;
    &:hover {
      border: 4px solid white;
    }
  }
`;
