import React from "react";
import Swiper from "swiper";
import { ReactIdSwiper } from "react-id-swiper";
import "swiper/swiper-bundle.css";

const HomeSwiper = () => {
  const params = {
    // Swiper.js configuration options
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    // ...
  };

  // Create a new Swiper instance
  const swiper = new Swiper(".mySwiper", params);

  return (
    <ReactIdSwiper
      // Add Swiper.js classes to the container
      className="mySwiper"
      // Pass the configuration options as props
      {...params}
    >
      {/* Add your Swiper.js slides here */}
      <div className="swiper-slide">Slide 1</div>
      <div className="swiper-slide">Slide 2</div>
      <div className="swiper-slide">Slide 3</div>
      {/* ... */}
    </ReactIdSwiper>
  );
};

export default HomeSwiper;
