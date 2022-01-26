import {
  Section,
  Box,
  TwoColumnGrid,
  Subtitle1,
  Text4,
  Button,
} from "../../../ui/controls";
import { PaletteColor, ScreenSize, ButtonType } from "../../../ui/types";
import styled from "styled-components";
import iPic from "../../../images/i_icon.svg";
import pinkSemicirclePic from "../../../images/decor_halfcirlce_pink.svg";
import greenPuzzleTranslucentPic from "../../../images/green-puzzle-translucent.svg";

const RelativeBox = styled(Box)<{
  alignItems?: string;
}>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: ${({ alignItems }) => alignItems};
  padding-top: 85px;
  padding-right: 40px;
  padding-left: 40px;

  @media (max-width: ${ScreenSize.Medium}px) {
    align-items: center;
    padding-top: 40px;
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const TwoColumnGridInfo = styled(TwoColumnGrid)`
  grid-row-gap: 0;

  @media (max-width: ${ScreenSize.Medium}px) {
    .info__about {
      padding-bottom: 40px;
      grid-area: A;
    }
    .info__tip {
      grid-area: B;
    }
    .info__button {
      grid-area: C;
    }
    .info__puzzle {
      grid-area: D;
    }
    grid-template-areas:
      "A"
      "B"
      "D"
      "C";

    .tip__box {
      left: 0;
      padding-right: 140px;
    }
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    .tip__i-pic {
      top: 40px;
      width: 15px;
    }

    .tip__pink-semicircle-pic {
      top: -50px;
      left: 78%;
      width: 58px;
    }
  }
`;

const AbsoluteBox = styled(Box)`
  display: flex;
  position: relative;
  left: -65px;
  display: flex;
  max-width: 520px;
  min-height: 170px;
  padding-right: 170px;
  z-index: 5;
`;

const FlexColumn = styled.div`
  max-width: 520px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: ${ScreenSize.Medium}px) {
    align-items: center;
    max-width: 100%;
  }
`;

const StyledImg = styled.img<{
  margin?: string;
  position?: string;
  top?: string;
  left?: string;
  width?: string;
  height?: string;
}>`
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  object-fit: contain;
  object-position: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const InfoSection: React.FC = () => {
  return (
    <Section borderBox flex centered>
      <TwoColumnGridInfo width="100%">
        <RelativeBox flex column alignItems="flex-end" className="info__about">
          <FlexColumn>
            <Subtitle1 mb={1}>О ДЕМЕНЦИИ</Subtitle1>
            <Text4>
              Деменция — это синдром, обычно хронический или прогрессирующий,
              при котором происходит деградация когнитивных функций: памяти,
              мышления, понимания, речи и способности ориентироваться, считать,
              познавать и рассуждать. Деменция оказывает физическое,
              психологическое, социальное и экономическое воздействие не только
              на страдающих ею людей, но и на людей, осуществляющих уход, на их
              семьи и общество в целом.
            </Text4>
          </FlexColumn>
        </RelativeBox>
        <RelativeBox
          backgroundColor={PaletteColor.DarkPurple}
          alignItems="flex-start"
          className="info__tip"
        >
          <AbsoluteBox
            backgroundColor={PaletteColor.LightGreen}
            className="tip__box"
          >
            <Text4 mt={1} mb={1} ml={4}>
              Согласно оценкам экспертов Всемирной Организации Здравоохранения,
              деменцией в мире страдает более 55 миллионов человек в возрасте
              старше 65 лет. Ожидается, что к 2030 г. этот показатель вырастет
              до 78 миллионов, а к 2050 г. – до 139 миллионов. Согласно
              статистическим данным новый случай заболевания деменцией
              появляется каждые 3 секунды. Деменция — это болезнь, а не
              нормальное проявление старения.
            </Text4>
            <StyledImg
              src={iPic}
              width="25px"
              position="absolute"
              top="calc(50% - 45px)"
              left="80%"
              className="tip__i-pic"
            />
            <StyledImg
              src={pinkSemicirclePic}
              height="240px"
              position="absolute"
              top="calc(50% - 120px)"
              left="75%"
              className="tip__pink-semicircle-pic"
            />
          </AbsoluteBox>
        </RelativeBox>
        <RelativeBox alignItems="flex-end" className="info__button">
          <FlexColumn>
            <Button type={ButtonType.Secondary} ghost>
              Подробнее
            </Button>
          </FlexColumn>
        </RelativeBox>
        <RelativeBox
          backgroundColor={PaletteColor.DarkPurple}
          className="info__puzzle"
          zIndex={-1}
        >
          <StyledImg
            src={greenPuzzleTranslucentPic}
            width="80px"
            position="absolute"
            top="30%"
            left="10%"
          />
        </RelativeBox>
      </TwoColumnGridInfo>
    </Section>
  );
};

export default InfoSection;
