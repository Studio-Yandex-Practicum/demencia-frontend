import { useState } from "react";
import {
  Subtitle1,
  Subtitle3,
  Text1,
  Text4,
  Button,
} from "../../../ui/controls";
import { PaletteColor, ButtonType } from "../../../ui/types";
import {
  StyledInfoSection,
  RelativeBox,
  TwoColumnGridInfo,
  FlexColumn,
  StyledImg,
} from "./info-section-styles";
import iPic from "../../../images/i_icon.svg";
import pinkSemicirclePic from "../../../images/decor_halfcirlce_pink.svg";
import greenPuzzleTranslucentPic from "../../../images/green-puzzle-translucent.svg";
import purpleHalfGreenPuzzzlePic from "../../../images/purple-and-green-puzzle.svg";
import grandparentsPic from "../../../images/grandparents.jpg";
import greenSemicirclePic from "../../../images/green-semicircle.svg";
import Details from "../../../components/details";
import { Settings } from "../../../types/settings";

const InfoSection: React.FC<{ settings: Settings }> = ({ settings }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  function StringToArray(string: string): HTMLElement[] {
    const domArray = Array.from(
      new DOMParser()
        .parseFromString(string, "text/html")
        .getElementsByTagName("p")
    );
    return domArray;
  }

  return (
    <StyledInfoSection borderBox flex centered mb={1}>
      <TwoColumnGridInfo width="100%" className="info__about-grid">
        <RelativeBox flex column className="info__about">
          <FlexColumn className="about__column">
            <Subtitle1 mb={2}>
              {settings.aboutSection || "О ДЕМЕНЦИИ"}
            </Subtitle1>
            <Text1>
              {StringToArray(settings.aboutSectionTerm).map((i) => (
                <p>{i.innerText}</p>
              )) ||
                "Деменция — это синдром, обычно хронический или прогрессирующий, при котором происходит деградация когнитивных функций: памяти, мышления, понимания, речи и способности ориентироваться, считать, познавать и рассуждать. Деменция оказывает физическое, психологическое, социальное и экономическое воздействие не только на страдающих ею людей, но и на людей, осуществляющих уход, на их семьи и общество в целом."}
            </Text1>
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
            <Text4 mt={3} mb={1} ml={4}>
              {StringToArray(settings.aboutSectionInfo).map((i) => (
                <p>{i.innerText}</p>
              )) ||
                "Согласно оценкам экспертов Всемирной Организации Здравоохранения, деменцией в мире страдает более 55 миллионов человек в возрасте старше 65 лет. Ожидается, что к 2030 г. этот показатель вырастет до 78 миллионов, а к 2050 г. – до 139 миллионов. Согласно статистическим данным новый случай заболевания деменцией появляется каждые 3 секунды. Деменция — это болезнь, а не нормальное проявление старения."}
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
              borderWidth={2}
              className="info__more-button"
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            >
              {isDetailsOpen
                ? `${settings.aboutSectionTermCloseLabel || "Скрыть"}`
                : `${settings.aboutSectionTermOpenLabel || "Подробнее"}`}
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

      {isDetailsOpen ? <Details /> : ""}

      <TwoColumnGridInfo width="100%" className="info__help-grid">
        <RelativeBox className="info__help">
          <FlexColumn className="help__column">
            <Subtitle1 className="help__title">
              {settings.aboutSectionActionTitle || "Помоги близким"}
            </Subtitle1>
            <Subtitle3 className="help__subtitle">
              {settings.aboutSectionActionSubtitle ||
                "Пройди тест с тем кому нужна помощь"}
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
              {settings.aboutSectionButtonLabel || "Пройти тест"}
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
