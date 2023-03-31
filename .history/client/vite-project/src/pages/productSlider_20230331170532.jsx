import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// import required modules
import { Pagination } from "swiper";

const ProductSlider = ({ productData }) => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[350px]"
      >
        {productData.photos.map((photo) => (
          <SwiperSlide key={photo._id}>
            <img
              src={photo.secure_url}
              alt={photo.id}
              className="flex  text-center justify-center justify-items-center align-middle m-auto "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
