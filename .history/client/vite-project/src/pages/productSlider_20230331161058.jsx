import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const ProductSlider = ({ productData }) => {
  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        direction={"vertical"}
        className="mySwiper"
      >
        {productData.photos.map((photo) => (
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
};

export default ProductSlider;
