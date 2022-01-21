import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import image from "../../../../images/pechkin.png";
import whiteHalfCircle from "../../../../images/test_halfcircle_white.svg";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Container, Box, Link } from "../../../../ui/controls";
import { ContainerSize, TextColor } from "../../../../ui/types";
import { BackgroundColor } from "../../../../ui/types/background-color.enum";
import { Subtitle3 } from "../../../../ui/controls/typography";
import { ScreenSize } from "../../../../ui/types";
import SwiperButton from "./styles/navigation";
import StyledSwiper from "./styles/swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Wrapper = styled.div`
  position: absolute;
  bottom: calc(100% / 2 - 175px / 0.65);
  z-index: 1;
  max-width: 450px;
  left: 0;
  @media (max-width: ${ScreenSize.Medium}px) {
    left: 0;
    max-width: 600px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    left: 15px;
    max-width: 70vw;
    bottom: calc(100% / 2 - 70px / 0.65);
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    bottom: 0;
    left: 0;
    max-width: 100%;
  }
`;

const Image = styled.img.attrs((props) => ({
  src: props.src || image,
}))`
  max-width: 905px;
  width: 55vw;
  height: 900px;
  object-fit: cover;
  object-position: top;
  @media (max-width: ${ScreenSize.Large}px) {
    height: 800px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 100%;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    max-width: 100%;
    height: 75%;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    height: 100%;
  }
`;

const Decor = styled.div`
  width: 135px;
  height: 266px;
  background-image: url(${whiteHalfCircle});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: calc(100% / 2 - 266px / 2);
  left: 69%;

  @media (max-width: ${ScreenSize.Medium}px) {
    bottom: calc(100% / 2 - 240px / 2);
    left: 79%;
    width: 124px;
    height: 240px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    display: none;
  }
`;

const StyledBox = styled(Box)`
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin: 8px 4px;
  }
`;

const Slider: React.FC = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Swiper
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
      navigation={{
        nextEl: nextRef.current,
        prevEl: prevRef.current,
      }}
      className="myStyles"
    >
      <SwiperSlide>
        <Wrapper>
          <Container
            size={ContainerSize.MediumSmall}
            bgColor={BackgroundColor.Alt2}
          >
            <StyledBox mt={2} mb={2} ml={2} mr={2}>
              <StyledBox mb={3}>
                <Subtitle3 uppercase={false} textColor={TextColor.Secondary}>
                  ФОНД «ПАМЯТЬ ПОКОЛЕНИЙ» И «СОЮЗМУЛЬТФИЛЬМ» ВЫПУСТИЛИ
                  МУЛЬТФИЛЬМ О ДИАГНОСТИКЕ КОГНИТИВНЫХ ИЗМЕНЕНИЙ
                </Subtitle3>
              </StyledBox>
              <StyledBox>
                <Link to="/details">
                  <Subtitle3 uppercase={false} textColor={TextColor.Secondary}>
                    Подробнее...
                  </Subtitle3>
                </Link>
              </StyledBox>
              <Decor />
            </StyledBox>
          </Container>
        </Wrapper>
        <Image src={image} />
      </SwiperSlide>
      <SwiperSlide>
        <Wrapper>
          <Container
            size={ContainerSize.MediumSmall}
            bgColor={BackgroundColor.Alt2}
          >
            <StyledBox mt={2} mb={2} ml={2} mr={2}>
              <StyledBox mb={3}>
                <Subtitle3 uppercase={false} textColor={TextColor.Secondary}>
                  ФОНД «ПАМЯТЬ ПОКОЛЕНИЙ» И «СОЮЗМУЛЬТФИЛЬМ» ВЫПУСТИЛИ
                  МУЛЬТФИЛЬМ О ДИАГНОСТИКЕ КОГНИТИВНЫХ ИЗМЕНЕНИЙ
                </Subtitle3>
              </StyledBox>
              <StyledBox>
                <Link to="/details">
                  <Subtitle3 uppercase={false} textColor={TextColor.Secondary}>
                    Подробнее...
                  </Subtitle3>
                </Link>
              </StyledBox>
              <Decor />
            </StyledBox>
          </Container>
        </Wrapper>
        <Image src={image} />
      </SwiperSlide>
      <div className="swiper-pagination" />
      {/* TODO: Make slides move on click */}
      <SwiperButton type="left" ref={prevRef} />
      <SwiperButton type="right" ref={nextRef} />
    </Swiper>
  );
};

export default Slider;
