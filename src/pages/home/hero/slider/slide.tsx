import styled from "styled-components";
import defaultImage from "../../../../images/slider-default-image.png";
import whiteHalfCircle from "../../../../images/test_halfcircle_white.svg";
import { Container, Box, Link } from "../../../../ui/controls";
import { ContainerSize, TextColor } from "../../../../ui/types";
import { BackgroundColor } from "../../../../ui/types/background-color.enum";
import { Subtitle3 } from "../../../../ui/controls/typography";
import { ScreenSize } from "../../../../ui/types";

const Wrapper = styled.div`
  position: absolute;
  bottom: calc(100% / 2 - 175px / 0.65);
  z-index: 1;
  width: min(100% - 100px, 450px);
  left: 0;
  @media (max-width: ${ScreenSize.Medium}px) {
    width: min(100% - 100px, 520px);
  }
  @media (max-width: ${ScreenSize.Small}px) {
    left: 20px;
    bottom: 50px;
    height: min(140px, 50%);
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    bottom: 0;
    left: 0;
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
  right: 10px;

  @media (max-width: ${ScreenSize.Medium}px) {
    bottom: calc(100% / 2 - 240px / 2);
    width: 124px;
    height: 240px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    display: none;
  }
`;

const StyledBox = styled(Box)`
  @media (max-width: ${ScreenSize.Small}px) {
    margin-right: 16px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin: 8px 4px;
  }
  @media screen and (max-width: 365px) {
    margin: 0 4px;
    bottom: 15px;
  }
`;

const StyledBgImage = styled.div<{
  url?: string;
}>`
  max-width: 905px;
  width: 55vw;
  height: 900px;
  background: rgb(0, 0, 0);
  background-image: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.15) 0%
    ),
    url(${(props) => props.url || defaultImage});
  background-size: cover;
  background-position: top;
  @media (max-width: ${ScreenSize.Large}px) {
    height: 800px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 100%;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    max-width: 100%;
    height: 85vw;
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
`;

interface SlideProps {
  imageSource?: string;
  text?: string;
  linkTo?: string;
}

const Slide: React.FC<SlideProps> = ({ imageSource, text, linkTo }) => {
  return (
    <>
      <Wrapper>
        <StyledContainer
          size={ContainerSize.MediumSmall}
          bgColor={BackgroundColor.Alt2}
        >
          <StyledBox height="140px" mt={2} mb={2} ml={2} mr={8}>
            <StyledBox mb={3}>
              <Subtitle3 uppercase={false} textColor={TextColor.Secondary}>
                {text}
              </Subtitle3>
            </StyledBox>
            <StyledBox absolute bottom="10px">
              <Link to={linkTo || ""}>
                <Subtitle3 uppercase={false} textColor={TextColor.Secondary}>
                  Подробнее...
                </Subtitle3>
              </Link>
            </StyledBox>
            <Decor />
          </StyledBox>
        </StyledContainer>
      </Wrapper>
      <StyledBgImage url={imageSource} />
    </>
  );
};

export default Slide;
