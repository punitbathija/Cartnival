import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const ProductSlider = ({ productData }) => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
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
