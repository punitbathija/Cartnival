import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
  EffectFade,
} from "swiper";
import "swiper/swiper-bundle.min.css";

function HomeSwiper({ slides }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      effect={"fade"}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img
            src={slide.image}
            alt={slide.title}
            className="md:flex justify-center align-middle justify-items-center mx-auto my-7"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomeSwiper;
