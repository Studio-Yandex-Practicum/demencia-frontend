import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "./styles/pagination.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperButton from "./styles/navigation";
import StyledSwiper from "./styles/swiper";
import Slide from "./slide";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Slider: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <StyledSwiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) =>
          `<div class=${className} key=${index}></div>`,
      }}
      onBeforeInit={(swiper) => {
        if (typeof swiper.params.navigation !== "boolean") {
          const navigation = swiper.params.navigation;
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          navigation!.prevEl = prevRef.current;
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          navigation!.nextEl = nextRef.current;
        }
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

      <div className="swiper-pagination" />
      <SwiperButton type="left" ref={prevRef} />
      <SwiperButton type="right" ref={nextRef} />
    </StyledSwiper>
  );
};

export default Slider;
