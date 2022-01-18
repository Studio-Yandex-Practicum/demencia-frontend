import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// eslint-disable-next-line import/extensions
import image from "./pechkin.png";
import cursorPointer from "../../../../images/cursor_pointer.svg";
import whiteHalfCircle from "../../../../images/test_halfcircle_white.svg";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import { Container, Box } from "../../../../ui/controls";
import { ContainerSize, TextColor } from "../../../../ui/types";
import { BackgroundColor } from "../../../../ui/types/background-color.enum";
import { Text1 } from "../../../../ui/controls/typography";
import { ScreenSize } from "../../../../ui/types";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Wrapper = styled.div`
  position: absolute;
  bottom: calc(100% / 2 - 175px / 0.65);
  z-index: 1;
  @media (max-width: ${ScreenSize.XSmall}px) {
    bottom: calc(100% / 2 - 175px / 0.8);
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    bottom: 0;
  }
`;

const Image = styled.img.attrs((props) => ({
  src: props.src || image,
}))`
  max-width: 905px;
  width: 55vw;
  @media (max-width: ${ScreenSize.Medium}px) {
    max-width: 100%;
    width: 100%;
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
  left: 77%;

  @media (max-width: ${ScreenSize.Large}px) {
    display: none;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    display: block;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    display: none;
  }
`;

const LINK = styled.div`
  a {
    font-size: 20px;
    line-height: 10px;
    font-weight: 400;
    color: white;
    margin-top: 24px;
    text-decoration: none;
    transition: border-bottom 0.5s cubic-bezier(0.2, -2, 0.8, 2);
    cursor: url(${cursorPointer}), pointer;
    &:hover {
      border-bottom: 2px solid #6d097a;
    }
    @media (max-width: ${ScreenSize.Small}px) {
      font-size: 16px;
    }
  }
`;

const StyledText = styled(Text1)`
  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 16px;
  }
`;

const StyledBox = styled(Box)`
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin: 8px;
  }
`;

const Slider: React.FC = () => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      className="myStyles"
    >
      <SwiperSlide>
        <Wrapper>
          <Container
            size={ContainerSize.MediumSmall}
            bgColor={BackgroundColor.Alt2}
          >
            <StyledBox mt={4} mb={2} ml={2} mr={12}>
              <StyledText mb={2} textColor={TextColor.Secondary}>
                ФОНД «ПАМЯТЬ ПОКОЛЕНИЙ» И «СОЮЗМУЛЬТФИЛЬМ» ВЫПУСТИЛИ МУЛЬТФИЛЬМ
                О ДИАГНОСТИКЕ КОГНИТИВНЫХ ИЗМЕНЕНИЙ
              </StyledText>
              <LINK>
                <Link to="/">Подробнее...</Link>
              </LINK>
            </StyledBox>
            <Decor />
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
            <StyledBox mt={4} mb={2} ml={2} mr={12}>
              <StyledText mb={2} textColor={TextColor.Secondary}>
                ФОНД «ПАМЯТЬ ПОКОЛЕНИЙ» И «СОЮЗМУЛЬТФИЛЬМ» ВЫПУСТИЛИ МУЛЬТФИЛЬМ
                О ДИАГНОСТИКЕ КОГНИТИВНЫХ ИЗМЕНЕНИЙ
              </StyledText>
              <LINK>
                <Link to="/">Подробнее...</Link>
              </LINK>
            </StyledBox>
            <Decor />
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
            <StyledBox mt={4} mb={2} ml={2} mr={12}>
              <StyledText mb={2} textColor={TextColor.Secondary}>
                ФОНД «ПАМЯТЬ ПОКОЛЕНИЙ» И «СОЮЗМУЛЬТФИЛЬМ» ВЫПУСТИЛИ МУЛЬТФИЛЬМ
                О ДИАГНОСТИКЕ КОГНИТИВНЫХ ИЗМЕНЕНИЙ
              </StyledText>
              <LINK>
                <Link to="/">Подробнее...</Link>
              </LINK>
            </StyledBox>
            <Decor />
          </Container>
        </Wrapper>
        <Box />
        <Image src={image} />
      </SwiperSlide>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
};

export default Slider;
