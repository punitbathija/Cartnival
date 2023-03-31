import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// import required modules
import { Navigation } from "swiper";

const ProductSlider = ({ productData }) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper w-1/2"
      >
        {productData.photos.map((photo) => (
          <SwiperSlide key={photo._id}>
            <img
              src={photo.secure_url}
              alt={photo.id}
              className="h-[350px] m-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
