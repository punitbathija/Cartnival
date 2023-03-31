import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// import required modules
import { Pagination } from "swiper";

const ProductSlider = ({ product }) => {
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
        {product.photos.map((photo) => (
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
