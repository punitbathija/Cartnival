import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from "swiper";
import "swiper/swiper-bundle.min.css";

const HomeSwiper = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("")}
      onSwiper={(swiper) => console.log()}
      effect={"cards"}
      cardeffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.image}>
          <img
            src={slide.image}
            alt={slide.title}
            className="md:h-[550px] m-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSwiper;
