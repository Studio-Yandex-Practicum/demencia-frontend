import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// eslint-disable-next-line import/extensions
import image from "./img.webp";
import cursorPointer from "../../../../images/cursor_pointer.svg";
import pinkHalfCircle from "../../../../images/decor_halfcirlce_pink.svg";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Content = styled.div`
  width: 100%;
  height: auto;
`;

const Info = styled.div`
  max-width: 195px;
  min-height: 71px;
  background-color: #00926f;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10px;
  position: relative;
  bottom: 170px;
`;

const Image = styled.img.attrs((props) => ({
  src: props.src || image,
}))`
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  max-width: 150px;
  font-size: 19px;
  line-height: 18px;
  font-weight: 400;
  letter-spacing: 1.6px;
  color: white;
  margin: 3px 0 0 19px;
  text-overflow: ellipsis;
  overflow: hidden;
  z-index: 1;
  @media screen and (max-width: 767px) {
    max-width: 135px;
    font-size: 15px;
    line-height: 15px;
  }
  @media screen and (max-width: 369px) {
    margin: 10px 0 0 29px;
  }
`;

const Decor = styled.div`
  width: 63px;
  height: 125px;
  background-image: url(${pinkHalfCircle});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: -20px;
  left: 115px;

  @media screen and (max-width: 767px) {
    width: 53px;
    height: 105px;
    bottom: 57px;
    left: 105px;
  }
  @media screen and (max-width: 639px) {
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
      spaceBetween={10}
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
        <Content>
          <Image src={image} />
          <Info>
            <Title>ЗАГОЛОВОК СТАТЬИ</Title>
            <LINK>
              <Link to="/">ПОДРОБНЕЕ</Link>
            </LINK>
            <Decor />
          </Info>
        </Content>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
