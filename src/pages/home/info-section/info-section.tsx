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
import Details from "../../../components/details";

import { useQuery } from "@apollo/client";
import { SettingsData } from "../../../types/settings";
import { GET_SETTINGS } from "../../../gql/query/settings";
import { toast } from "react-hot-toast";

import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";
import ButtonWithSemicircle from "../../../components/button-with-semicircle";

const InfoSection: React.FC = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const { data } = useQuery<SettingsData>(GET_SETTINGS, {
    fetchPolicy: "cache-first",
  });

  if (!data || !data.settings) {
    toast.error("Не удалось получить настройки сайта", { id: "error" });
    return <div />;
  }

  const settings = data.settings;

  return (
    <StyledInfoSection id="info" borderBox flex centered mb={1}>
      <TwoColumnGridInfo width="100%" className="info__about-grid">
        <RelativeBox flex column className="info__about">
          <FlexColumn className="about__column">
            <Subtitle1 mb={2}>
              {settings.aboutSection || "О ДЕМЕНЦИИ"}
            </Subtitle1>
            <Text1>
              {ReactHtmlParser(DOMPurify.sanitize(settings.aboutSectionTerm)) ||
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
            <Text4 mt={2} mb={2} ml={4}>
              {ReactHtmlParser(DOMPurify.sanitize(settings.aboutSectionInfo)) ||
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
            <ButtonWithSemicircle
              maxWidth={350}
              buttonText={settings.aboutSectionButtonLabel}
            />
          </FlexColumn>
        </RelativeBox>
      </TwoColumnGridInfo>
    </StyledInfoSection>
  );
};

export default InfoSection;
