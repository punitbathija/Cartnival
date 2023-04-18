import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
  Autoplay,
} from "swiper";
import "swiper/swiper-bundle.min.css";

const HomeSwiper = ({ slides }) => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y, EffectCards, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("")}
      onSwiper={(swiper) => console.log()}
      effect={"cards"}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      cardeffect={{
        shadow: true,
        slideShadows: false,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img
            src={slide.image}
            alt={slide.title}
            className="h-[550px] m-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSwiper;
