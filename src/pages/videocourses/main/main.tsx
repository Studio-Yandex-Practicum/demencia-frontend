import { FC } from "react";
import { VideoCard } from "../../../components/videoCard";
import { Box, Grid, Section } from "../../../ui/controls";
import { PaletteColor, ScreenSize } from "../../../ui/types";
import AnimationWrapper from "../../../components/animation-wrapper";
import halfGreenPuzzleTranslucent from "../../../images/green-puzzle-translucent.svg";
import purplePuzzleBottom from "../../../images/purple-puzzle-bottom.svg";
import greenSemicircle from "../../../images/green-semicircle.svg";
import StyledImage from "./styled-image";
import styled from "styled-components";

const StyledTopBox = styled(Box)`
  height: 26%;
  width: 100%;
  top: 0;

  @media (max-width: ${ScreenSize.Large}px) {
    & {
      height: 34%;
    }
  }

  @media (max-width: ${ScreenSize.Small}px) {
    & {
      height: 26%;
    }
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    & {
      height: 26%;
    }
  }
`;

const StyledBottomBox = styled(Box)`
  height: 26%;
  width: 100%;
  top: 1140px;

  @media (max-width: ${ScreenSize.Large}px) {
    & {
      height: 34%;
      top: 1470px;
    }
  }

  @media (max-width: 1032px) {
    & {
      height: 34%;
      top: 2920px;
    }
  }

  @media (max-width: ${ScreenSize.Small}px) {
    & {
      height: 26%;
      top: 2950px;
    }
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    & {
      height: 26%;
    }
  }
`;

export const Main: FC = () => {
  return (
    <Section flex centered mt={2}>
      <AnimationWrapper>
        <StyledTopBox backgroundColor={PaletteColor.LightGreen} flex absolute />
      </AnimationWrapper>
      <AnimationWrapper>
        <StyledBottomBox
          backgroundColor={PaletteColor.LightGreen}
          flex
          absolute
        />
      </AnimationWrapper>
      <AnimationWrapper>
        <StyledImage
          src={greenSemicircle}
          puzzleType="video__green-semicircle"
        />
      </AnimationWrapper>
      <AnimationWrapper>
        <StyledImage
          src={halfGreenPuzzleTranslucent}
          puzzleType="video__translucent-half-green-puzzle"
        />
      </AnimationWrapper>
      <AnimationWrapper>
        <StyledImage
          src={purplePuzzleBottom}
          puzzleType="video__bottom-purple-puzzle"
        />
      </AnimationWrapper>
      <AnimationWrapper>
        <StyledImage
          src={halfGreenPuzzleTranslucent}
          puzzleType="video__half-green-puzzle"
        />
      </AnimationWrapper>

      <Grid pt={5} pl={5} pr={5} zIndex={2}>
        {[...Array(12)].map(() => (
          <VideoCard
            videoSource="http://www.youtube.com/embed/Kntl3zvpeLI"
            cardTitle="ПРОБЛЕМЫ С ПАМЯТЬЮ? ВОЗМОЖНО, У ВАС ДЕМЕНЦИЯ! КАК УЗНАТЬ НАВЕРНЯКА?"
          />
        ))}
      </Grid>
    </Section>
  );
};
