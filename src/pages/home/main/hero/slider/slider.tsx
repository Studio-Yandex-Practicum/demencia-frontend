import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import image from "./img.webp";
import "./styles.css";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slider: React.FC = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="myStyles"
      >
        <SwiperSlide>
          slide 1
          <img src={image} className="myImage" />
        </SwiperSlide>
        <SwiperSlide>
          slide 2
          <img src={image} className="myImage" />
        </SwiperSlide>
        <SwiperSlide>
          slide 3
          <img src={image} className="myImage" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
