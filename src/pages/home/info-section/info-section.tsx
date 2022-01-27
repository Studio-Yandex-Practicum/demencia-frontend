import {
  Section,
  Box,
  TwoColumnGrid,
  Subtitle1,
  Subtitle3,
  Text4,
  Button,
} from "../../../ui/controls";
import { PaletteColor, ScreenSize, ButtonType } from "../../../ui/types";
import styled from "styled-components";
import iPic from "../../../images/i_icon.svg";
import pinkSemicirclePic from "../../../images/decor_halfcirlce_pink.svg";
import greenPuzzleTranslucentPic from "../../../images/green-puzzle-translucent.svg";
import purpleHalfGreenPuzzzlePic from "../../../images/purple-and-green-puzzle.svg";
import grandparentsPic from "../../../images/grandparents.jpg";
import greenSemicirclePic from "../../../images/green-semicircle.svg";

const StyledInfoSection = styled(Section)`
  .info__about {
    align-items: flex-end;
    padding: 85px 40px;
  }

  .about__tip {
    align-items: flex-start;
    padding: 85px 40px;
  }

  .tip__box {
    left: -65px;
    max-width: 520px;
    min-height: 170px;
    padding-right: 170px;
    z-index: 5;
  }

  .tip__i-pic {
    width: 25px;
    position: absolute;
    top: calc(50% - 45px);
    left: 80%;
  }

  .tip__pink-semicircle-pic {
    height: 240px;
    position: absolute;
    top: calc(50% - 120px);
    left: 75%;
  }

  .info__more-button-box {
    align-items: flex-end;
    padding: 0 40px;
  }

  .more-button-box__column {
    max-width: 520px;
    align-items: flex-start;
  }

  .about__column {
    max-width: 520px;
  }

  .info__help-grid {
    grid-template-areas:
      "info__help info__grandparents"
      "info__help info__test-button";
  }

  .info__puzzle-image {
    width: 80px;
    position: absolute;
    top: -100%;
    left: 10%;
  }

  .info__help {
    grid-area: info__help;
    align-items: flex-end;
    padding: 230px 40px 120px 40px;
  }

  .help__column {
    max-width: 235px;
  }

  .help__title {
    text-align: right;
  }

  .help__subtitle {
    text-align: right;
  }

  .help__puzzle-image {
    width: 520px;
    position: absolute;
    top: 10%;
  }

  .info__grandparents {
    grid-area: info__grandparents;
    padding: 0;
  }

  .grandparents__image {
    width: 600px;
    position: absolute;
    top: -20px;
    left: -20px;
  }

  .info__test-button {
    grid-area: info__test-button;
    padding-top: 390px;
  }

  .info__test-button-column {
    max-width: 590px;
    align-items: center;
  }

  .test-button__side-semicircle {
    width: 60px;
    position: absolute;
    top: -32px;
    left: 270px;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    .info__about {
      grid-area: info__about;
      align-items: center;
      padding: 40px 20px;
    }

    .about__column {
      align-items: center;
      max-width: 100%;
    }

    .about__tip {
      grid-area: about__tip;
      align-items: center;
      padding: 40px 20px;
    }

    .info__more-button-box {
      grid-area: info__more-button-box;
      align-items: center;
      padding: 40px;
    }

    .more-button-box__column {
      max-width: 100%;
      align-items: center;
    }

    .info__puzzle {
      grid-area: info__puzzle;
    }

    .info__puzzle-image {
      top: -35px;
      left: 10%;
    }

    .info__about-grid {
      grid-template-areas:
        "info__about"
        "about__tip"
        "info__puzzle"
        "info__more-button-box";
    }

    .tip__box {
      left: 0;
      padding-right: 140px;
    }

    .info__help-grid {
      grid-template-areas:
        "info__grandparents"
        "info__help"
        "info__test-button";
    }

    .grandparents__image {
      width: 100%;
      position: static;
    }

    .info__help {
      grid-area: info__help;
      align-items: center;
      padding: 20px;
    }

    .help__column {
      max-width: 100%;
      align-items: center;
    }

    .help__title {
      text-align: center;
    }

    .help__subtitle {
      text-align: center;
    }

    .help__puzzle-image {
      display: none;
    }

    .info__test-button {
      grid-area: info__test-button;
      padding-top: 20px;
    }

    .info__test-button-column {
      max-width: 100%;
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

    .info__test-button {
      grid-area: info__test-button;
      transform: scale(0.7);
    }
  }
`;

const RelativeBox = styled(Box)<{
  alignItems?: string;
}>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: ${({ alignItems }) => alignItems};
`;

const TwoColumnGridInfo = styled(TwoColumnGrid)`
  grid-row-gap: 0;
`;

const FlexColumn = styled.div<{
  maxWidth?: string;
  alignItems?: string;
}>`
  max-width: ${({ maxWidth }) => maxWidth};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ alignItems }) => alignItems};
`;

const StyledImg = styled.img`
  object-fit: contain;
  object-position: center;
`;

const InfoSection: React.FC = () => {
  return (
    <StyledInfoSection borderBox flex centered>
      <TwoColumnGridInfo width="100%" className="info__about-grid">
        <RelativeBox flex column className="info__about">
          <FlexColumn className="about__column">
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
          className="about__tip"
        >
          <RelativeBox
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
            <StyledImg src={iPic} className="tip__i-pic" />
            <StyledImg
              src={pinkSemicirclePic}
              className="tip__pink-semicircle-pic"
            />
          </RelativeBox>
        </RelativeBox>
        <RelativeBox className="info__more-button-box">
          <FlexColumn className="more-button-box__column">
            <Button
              type={ButtonType.Secondary}
              ghost
              className="info__more-button"
            >
              Подробнее
            </Button>
          </FlexColumn>
        </RelativeBox>
        <RelativeBox
          backgroundColor={PaletteColor.DarkPurple}
          className="info__puzzle"
          zIndex={1}
        >
          <StyledImg
            src={greenPuzzleTranslucentPic}
            className="info__puzzle-image"
          />
        </RelativeBox>
      </TwoColumnGridInfo>

      <TwoColumnGridInfo width="100%" className="info__help-grid">
        <RelativeBox className="info__help">
          <FlexColumn className="help__column">
            <Subtitle1 className="help__title">ПОМОГИ БЛИЗКИМ</Subtitle1>
            <Subtitle3 className="help__subtitle">
              Пройди тест вместе с тем, кому нужна помощь
            </Subtitle3>
          </FlexColumn>
          <StyledImg
            src={purpleHalfGreenPuzzzlePic}
            className="help__puzzle-image"
          />
        </RelativeBox>
        <RelativeBox className="info__grandparents">
          <StyledImg src={grandparentsPic} className="grandparents__image" />
        </RelativeBox>
        <RelativeBox className="info__test-button">
          <FlexColumn className="info__test-button-column">
            <Button type={ButtonType.Primary} width={300}>
              Пройти тест
              <StyledImg
                src={greenSemicirclePic}
                className="test-button__side-semicircle"
              />
            </Button>
          </FlexColumn>
        </RelativeBox>
      </TwoColumnGridInfo>
    </StyledInfoSection>
  );
};

export default InfoSection;
