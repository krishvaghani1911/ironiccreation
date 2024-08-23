import './herobaner.scss'
import React, { Component, useRef } from "react";
import Slider from 'react-slick'
import img2 from '../../../assets/imgs/img2.jpg'
import img3 from '../../../assets/imgs/img3.png'
import img4 from '../../../assets/imgs/img4.png'

export default function Herobanner() {
  let sliderRef = useRef(null);

  const settings = {
    dots: true,
    fade: true,
    speed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="slider-container">
      <Slider ref={slider => (sliderRef = slider)} {...settings}>
        <div>
        <img className='div div1' src={img2} alt="" />
        </div>
        <div>
        <img className='div div2' src={img3} alt="" />
        </div>
        <div>
        <img className='div div3' src={img4} alt="" />
        </div>
      </Slider>
    </div>

  )
}
