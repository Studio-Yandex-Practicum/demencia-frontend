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
import { Container } from "../../../../ui/controls";
import { ContainerSize, TextColor } from "../../../../ui/types";
import { BackgroundColor } from "../../../../ui/types/background-color.enum";
import { Text1 } from "../../../../ui/controls/typography";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Wrapper = styled.div`
  position: absolute;
  top: calc(100% / 2 - 175px / 2);
  z-index: 1;
`;

const Image = styled.img.attrs((props) => ({
  src: props.src || image,
}))`
  max-width: 55vw;
  max-heigth: 700px;
  object-fit: cover;
  object-position: top;
`;

const Decor = styled.div`
  width: 135px;
  height: 266px;
  background-image: url(${whiteHalfCircle});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: -45px;
  left: 466px;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const LINK = styled.div`
  a {
    font-size: 14px;
    line-height: 10px;
    font-weight: 400;
    color: white;
    margin: 11px 0 5px 20px;
    letter-spacing: 1px;
    text-decoration: none;
    transition: border-bottom 0.5s cubic-bezier(0.2, -2, 0.8, 2);
    cursor: url(${cursorPointer}), pointer;
    &:hover {
      border-bottom: 2px solid #6d097a;
    }
    @media screen and (max-width: 767px) {
      font-size: 7px;
      line-height: 7px;
    }
    @media screen and (max-width: 639px) {
      font-size: 5px;
      line-height: 5px;
    }
    @media screen and (max-width: 369px) {
      margin: 10px 0 10px 30px;
    }
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
      navigation={true}
      className="myStyles"
    >
      <SwiperSlide>
        <Wrapper>
          <Container
            size={ContainerSize.MediumSmall}
            bgColor={BackgroundColor.Alt2}
          >
            <Text1 mt={4} mb={4} ml={2} mr={4} textColor={TextColor.Secondary}>
              ФОНД «ПАМЯТЬ ПОКОЛЕНИЙ» И «СОЮЗМУЛЬТФИЛЬМ» ВЫПУСТИЛИ МУЛЬТФИЛЬМ О
              ДИАГНОСТИКЕ КОГНИТИВНЫХ ИЗМЕНЕНИЙ
            </Text1>
            <LINK>
              <Link to="/">ПОДРОБНЕЕ</Link>
            </LINK>
            <Decor />
          </Container>
        </Wrapper>
        <Image src={image} />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
