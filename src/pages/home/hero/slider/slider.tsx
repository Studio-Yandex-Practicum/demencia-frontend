import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperButton from "./styles/navigation";
import StyledSwiper from "./styles/swiper";
import { StyledPagination, StyledBullet } from "./styles/pagination";
import Slide from "./slide";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slider: React.FC = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const bulletRef = useRef(null);

  return (
    <StyledSwiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        el: paginationRef.current,
        clickable: true,
        renderBullet: (index) => <StyledBullet ref={bulletRef} key={index} />,
      }}
      navigation={{
        nextEl: nextRef.current,
        prevEl: prevRef.current,
        disabledClass: "disabled",
      }}
    >
      <SwiperSlide>
        <Slide text="Первая новость на главной странице. Какая-то информация тут." />
      </SwiperSlide>
      <SwiperSlide>
        <Slide text="Еще одна новость, тоже на главной странице. Текста тут чуть больше, чем в предыдущей новости" />
      </SwiperSlide>
      <SwiperSlide>
        <Slide text="Третья новость, тоже на главной странице. Текста тут еще больше, чем в предыдущей новости. Проверка размеров контейнера под разный контент" />
      </SwiperSlide>

      {/* TODO: Make pagination visible */}
      <StyledPagination ref={paginationRef} />
      {/* TODO: Make slides move on click */}
      <SwiperButton type="left" ref={prevRef} />
      <SwiperButton type="right" ref={nextRef} />
    </StyledSwiper>
  );
};

export default Slider;
