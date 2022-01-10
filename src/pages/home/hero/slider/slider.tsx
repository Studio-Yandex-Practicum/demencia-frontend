import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// eslint-disable-next-line import/extensions
import image from "./img.webp";
import pinkHalfCircle from "../../../../images/decor_halfcirlce_pink.svg";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Container, Link } from "../../../../ui/controls";
import { ContainerSize, TextColor } from "../../../../ui/types";
import { BackgroundColor } from "../../../../ui/types/background-color.enum";
import { Text1 } from "../../../../ui/controls/typography";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Image = styled.img.attrs((props) => ({
  src: props.src || image,
}))`
  width: 100%;
  height: auto;
`;

const Decor = styled.div`
  width: 115px;
  height: 220px;
  background-image: url(${pinkHalfCircle});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: -20px;
  left: 370px;
`;
const Wrapper = styled.div`
  position: relative;
  bottom: 210px;
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
        <Image src={image} />
        <Wrapper>
          <Decor />
          <Container size={ContainerSize.Small} bgColor={BackgroundColor.Alt2}>
            <Text1 mt={2} mb={1} ml={2} textColor={TextColor.Secondary}>
              Фонд «Память поколений» и «Cоюзмультфильм» выпустили мультфильм о
              диагностике когнитивных изменений
            </Text1>
            <Box ml={2} mb={1}>
              <Link to="#" textColor={TextColor.Secondary}>
                Подробнее...
              </Link>
            </Box>
          </Container>
        </Wrapper>
      </SwiperSlide>
      <SwiperSlide>
        <Image src={image} />
        <Wrapper>
          <Decor />
          <Container size={ContainerSize.Small} bgColor={BackgroundColor.Alt2}>
            <Text1 mt={2} mb={1} ml={2} textColor={TextColor.Secondary}>
              Фонд «Память поколений» и «Cоюзмультфильм» выпустили мультфильм о
              диагностике когнитивных изменений
            </Text1>
            <Box ml={2} mb={1}>
              <Link to="#" textColor={TextColor.Secondary}>
                Подробнее...
              </Link>
            </Box>
          </Container>
        </Wrapper>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
