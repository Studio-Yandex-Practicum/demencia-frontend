import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Slide from "./slide";
import { StyledSwiper } from "./styles/swiper";
import SwiperButton from "./styles/navigation";
import defaultImage from "../../../images/slider-default.svg";
import { useQuery } from "@apollo/client";
import { toast } from "react-hot-toast";
import { PartnersData } from "../../../types/partners";
import { GET_PARTNERS } from "../../../gql/query/partners";

SwiperCore.use([Autoplay, Navigation]);

const EmptySlide: React.FC = () => (
  <StyledSwiper>
    <SwiperSlide>
      <Slide imageSource={defaultImage} name="Партнер" url="" />
    </SwiperSlide>
  </StyledSwiper>
);

const Slider: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const { data, loading, error } = useQuery<PartnersData>(GET_PARTNERS);

  if (loading) return <EmptySlide />;

  if (error) {
    toast.error(`Не удалось загрузить партнеров с сервера`, { id: "error" });
    return <EmptySlide />;
  }

  if (!data || !data.partners) return <EmptySlide />;

  const items = data.partners.filter((el) => !!el);

  if (!items.length) return <EmptySlide />;

  return (
    <StyledSwiper
      spaceBetween={30}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 3,
        },
        950: {
          slidesPerView: 5,
        },
      }}
      loop={items.length > 3 ? true : false}
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
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <Slide
            imageSource={item.image || defaultImage}
            name={item.name || "Партнер"}
            url={item.url || ""}
          />
        </SwiperSlide>
      ))}

      <SwiperButton type="left" ref={prevRef} />
      <SwiperButton type="right" ref={nextRef} />
    </StyledSwiper>
  );
};

export default Slider;
