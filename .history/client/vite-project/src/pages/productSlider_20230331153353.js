import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {productSlice.photos.map((photo) => (
          <SwiperSlide key={photo._id}>
            <img
              src={photo.secure_url}
              alt={photo.id}
              className="md:h-[550px] m-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
