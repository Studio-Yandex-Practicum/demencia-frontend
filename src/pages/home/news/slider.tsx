import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Slide from "./slide";
import { StyledSwiper } from "./styles/swiper";
import SwiperButton from "./styles/navigation";
import defaultImage from "../../../images/default-image.png";

SwiperCore.use([Autoplay, Navigation]);

const Slider: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <StyledSwiper
      slidesPerView={5}
      spaceBetween={10}
      centeredSlides={true}
      roundLengths={true}
      loop={true}
      loopAdditionalSlides={10}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
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
      <SwiperSlide key={12}>
        <Slide
          imageSource={defaultImage}
          slideTitle="Заголовок новости"
          slideText="{article.subTitle}"
          linkTo="/article"
          linkTitle="Article"
        />
      </SwiperSlide>
      <SwiperSlide key={32}>
        <Slide
          imageSource={defaultImage}
          slideTitle="Заголовок новости"
          slideText="{article.subTitle}"
          linkTo="/article"
          linkTitle="Article"
        />
      </SwiperSlide>
      <SwiperSlide key={42}>
        <Slide
          imageSource={defaultImage}
          slideTitle="Заголовок новости"
          slideText="{article.subTitle}"
          linkTo="/article"
          linkTitle="Article"
        />
      </SwiperSlide>
      <SwiperSlide key={432}>
        <Slide
          imageSource={defaultImage}
          slideTitle="Заголовок новости"
          slideText="{article.subTitle}"
          linkTo="/article"
          linkTitle="Article"
        />
      </SwiperSlide>
      <SwiperSlide key={442}>
        <Slide
          imageSource={defaultImage}
          slideTitle="Заголовок новости"
          slideText="{article.subTitle}"
          linkTo="/article"
          linkTitle="Article"
        />
      </SwiperSlide>

      <SwiperButton type="left" ref={prevRef} />
      <SwiperButton type="right" ref={nextRef} />
    </StyledSwiper>
  );
};

export default Slider;
