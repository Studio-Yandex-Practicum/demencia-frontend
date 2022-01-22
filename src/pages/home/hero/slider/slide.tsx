import styled from "styled-components";
import image from "../../../../images/pechkin.png";
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

interface SlideProps {
  imageSource?: string;
  text?: string;
  linkTo?: string;
}

function textElipsis(t: string | undefined) {
  if (t !== undefined && t.length > 95) {
    return `${t.substring(0, 95)}...`;
  }
  return t;
}

const Slide: React.FC<SlideProps> = ({ imageSource, text, linkTo }) => {
  return (
    <>
      <Wrapper>
        <Container
          size={ContainerSize.MediumSmall}
          bgColor={BackgroundColor.Alt2}
        >
          <StyledBox height="140px" mt={2} mb={2} ml={2} mr={6}>
            <StyledBox mb={3}>
              <Subtitle3 uppercase={false} textColor={TextColor.Secondary}>
                {textElipsis(text)}
              </Subtitle3>
            </StyledBox>
            <StyledBox>
              <Link to={linkTo || ""}>
                <Subtitle3 uppercase={false} textColor={TextColor.Secondary}>
                  Подробнее...
                </Subtitle3>
              </Link>
            </StyledBox>
            <Decor />
          </StyledBox>
        </Container>
      </Wrapper>
      <Image src={imageSource} />
    </>
  );
};

export default Slide;
