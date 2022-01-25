import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import "./styles/pagination.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperButton from "./styles/navigation";
import { StyledSwiper, StyledBgImage } from "./styles/swiper";
import Slide from "./slide";
import { ScreenSize } from "../../../../ui/types";
import { useQuery } from "@apollo/client";
import { toast } from "react-hot-toast";
import { SliderData } from "../../../../types/slider";
import { GET_SLIDER_ITEMS } from "../../../../gql/query/slider";
import loadingImage from "../../../../images/slider-loading.svg";

SwiperCore.use([Autoplay, Pagination, Navigation]);

function textEllipsis(t: string | undefined) {
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

const EmptySlide: React.FC = () => (
  <StyledSwiper>
    <SwiperSlide>
      <Slide
        imageSource=""
        text={textEllipsis("Очень скоро здесь появится полезная информация.")}
        linkTitle=""
        linkTo=""
      />
    </SwiperSlide>
  </StyledSwiper>
);

const Slider: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const { data, loading, error } = useQuery<SliderData>(GET_SLIDER_ITEMS);

  if (loading) return <StyledBgImage url={loadingImage} />;

  if (error) {
    toast.error(`Не удалось загрузить слайды с сервера`, { id: "error" });
    return <EmptySlide />;
  }

  if (!data || !data.sliders) {
    return <EmptySlide />;
  }

  const items = data.sliders.filter((el) => el && el.isActive);

  if (!items.length) {
    return <EmptySlide />;
  }

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
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <Slide
            imageSource={item.image}
            text={textEllipsis(item.title)}
            linkTo={item.url}
            linkTitle={item.urlLabel}
          />
        </SwiperSlide>
      ))}

      <div className="swiper-pagination" />
      <SwiperButton type="left" ref={prevRef} />
      <SwiperButton type="right" ref={nextRef} />
    </StyledSwiper>
  );
};

export default Slider;
