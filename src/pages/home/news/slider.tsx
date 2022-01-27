import React, { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Slide from "./slide";
import { StyledSwiper } from "./styles/swiper";
import SwiperButton from "./styles/navigation";
import defaultImage from "../../../images/default-image.png";
import { useQuery } from "@apollo/client";
import { toast } from "react-hot-toast";
import { NewsArticlesData } from "../../../types/news";
import { GET_NEWS_ARTICLES } from "../../../gql/query/news";

SwiperCore.use([Autoplay, Navigation]);

function titleEllipsis(t: string | undefined) {
  if (t !== undefined && t.length > 20) return `${t.substring(0, 20)}...`;
}

function textEllipsis(t: string | undefined) {
  if (t !== undefined && t.length > 70) return `${t.substring(0, 70)}...`;
}

const EmptySlide: React.FC = () => (
  <StyledSwiper>
    <SwiperSlide>
      <Slide
        imageSource={defaultImage}
        slideTitle="Заголовок новости"
        slideText="Скоро тут появится интересная новость"
        linkTo="/"
        linkTitle="Подробнее"
      />
    </SwiperSlide>
  </StyledSwiper>
);

const Slider: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const { data, loading, error } =
    useQuery<NewsArticlesData>(GET_NEWS_ARTICLES);

  if (loading) return <EmptySlide />;

  if (error) {
    toast.error(`Не удалось загрузить новости с сервера`, { id: "error" });
    return <EmptySlide />;
  }

  if (!data || !data.newsArticles) return <EmptySlide />;

  const items = data.newsArticles.filter((el) => el && el.isActive);

  if (!items.length) return <EmptySlide />;

  return (
    <StyledSwiper
      slidesPerView={5}
      spaceBetween={30}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        750: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1300: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        1920: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      centeredSlides={false}
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
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <Slide
            imageSource={item.image || defaultImage}
            slideTitle={titleEllipsis(item.title) || "Заголовок новости"}
            slideText={
              textEllipsis(item.subTitle) ||
              "Скоро тут появится интересная новость"
            }
            linkTo={item.url || "/"}
            linkTitle={item.urlLabel || "Подробнее"}
          />
        </SwiperSlide>
      ))}

      <SwiperButton type="left" ref={prevRef} />
      <SwiperButton type="right" ref={nextRef} />
    </StyledSwiper>
  );
};

export default Slider;
