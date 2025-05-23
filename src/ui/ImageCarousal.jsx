import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const ImageCarousel = () => {
  const images = [
    "/public/image1Choco.png",
    "/public/image2Choco.png",
    "/public/image2Choco.png",
  ];

  return (
    <div className="w-full  bg-red-300 mx-auto">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView="auto"
        className="rounded-xl overflow-hidden"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Banner ${index + 1}`}
              className="w-full h-auto object-cover"
              style={{ width: "636px", height: "404px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
