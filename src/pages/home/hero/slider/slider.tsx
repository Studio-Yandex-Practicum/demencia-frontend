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
import { ScreenSize } from "../../../../ui/types";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function textElipsis(t: string | undefined) {
  if (t !== undefined && t.length > 95) {
    if (window.innerWidth >= ScreenSize.Medium) {
      return `${t.substring(0, 79)}...`;
    }
    if (window.innerWidth <= ScreenSize.XSmall) {
      return `${t.substring(0, 85)}...`;
    }
    return `${t.substring(0, 95)}...`;
  }
  return t;
}

const Slider: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <StyledSwiper
      spaceBetween={0}
      centeredSlides={true}
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      // }}
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
        <Slide
          imageSource="http://dev-demencia.tk/media/news/c689b3e21f25887.jpg"
          text={textElipsis("Первая новость, картина 1280х960, 60 символов.")}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          imageSource="https://cdn.suwalls.com/wallpapers/nature/snowy-rocky-mountains-36084-1920x1080.jpg"
          text={textElipsis(
            "Еще одна новость, картинка 1920х1080. Текста тут чуть больше, 80 символов."
          )}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          text={textElipsis(
            "Третья новость, картинка 1680х1634. Текста тут еще больше, 135 символов. Проверка размеров контейнера под разный контент."
          )}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          imageSource="https://img2.goodfon.ru/original/640x480/2/9f/gory-sneg-siniy.jpg"
          text={textElipsis(
            "Четвертая новость, картинка 640x480. 115 символов. Проверка размеров контейнера под разный контент."
          )}
        />
      </SwiperSlide>

      <div className="swiper-pagination" />
      <SwiperButton type="left" ref={prevRef} />
      <SwiperButton type="right" ref={nextRef} />
    </StyledSwiper>
  );
};

export default Slider;
