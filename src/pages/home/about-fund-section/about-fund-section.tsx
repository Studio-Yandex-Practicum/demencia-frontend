import { Box, Link } from "../../../ui/controls";
import { PaletteColor, TextColor } from "../../../ui/types";
import {
  FundButton,
  FundSubtitle1,
  FundText3,
  StyledAboutFundSection,
  StyledImage,
  StyledPurpleSemicircleThin,
  StyledWhiteHalfPuzzle,
} from "./about-fund-section-styles";
import whiteHalfPuzzle from "../../../images/half-white-puzzle.svg";
import lightGreenPuzzle from "../../../images/light-green-puzzle.svg";
import flower from "../../../images/flower.svg";
import purpleSemicircleThin from "../../../images/purple-semicircle-thin.svg";

import { useQuery } from "@apollo/client";
import { SettingsData } from "../../../types/settings";
import { GET_SETTINGS } from "../../../gql/query/settings";
import { toast } from "react-hot-toast";

import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";

import AnimationWrapper from "../../../components/animation-wrapper";

const AboutFundSection: React.FC = () => {
  const { data } = useQuery<SettingsData>(GET_SETTINGS, {
    fetchPolicy: "cache-first",
  });

  if (!data || !data.settings) {
    toast.error("Не удалось получить настроек сайта", { id: "error" });
    return <div />;
  }

  const settings = data.settings;

  return (
    <StyledAboutFundSection
      id="about"
      borderBox
      flex
      centered
      backgroundColor={PaletteColor.Green}
      mt={4}
    >
      <AnimationWrapper>
        <StyledWhiteHalfPuzzle
          src={whiteHalfPuzzle}
          className="about-fund-section__white-puzzle"
        />
      </AnimationWrapper>
      <AnimationWrapper>
        <StyledPurpleSemicircleThin
          src={purpleSemicircleThin}
          className="about-fund-section__purple-semicircle"
        />
      </AnimationWrapper>
      <StyledImage
        src={lightGreenPuzzle}
        className="about-fund-section__light-green-puzzle"
      />
      <AnimationWrapper>
        <FundSubtitle1
          textColor={TextColor.Secondary}
          hoverColor={TextColor.Secondary}
          className="about-fund-section__title"
          ellipsis
        >
          {settings.fundSection || "О ФОНДЕ"}
        </FundSubtitle1>
      </AnimationWrapper>
      <AnimationWrapper>
        <FundText3
          textColor={TextColor.Secondary}
          className="about-fund-section__text"
          mt={3}
          mb={3}
        >
          {ReactHtmlParser(DOMPurify.sanitize(settings.fundSectionInfo)) || (
            <>
              <p>
                Благотворительный фонд «Память поколений» был основан почти 6
                лет назад 22 июня – в День памяти и скорби.
              </p>
              <p>
                Наш фонд помогает ветеранам Великой Отечественной войны и
                современных боевых действий (в Афганистане, Чечне, Сирии). Всего
                за время существования фонда мы помогли почти 16000 ветеранов.
              </p>
              <p>
                Это огромное множество операций, курсов реабилитации,
                современных протезов и слуховых аппаратов, дорогостоящих колясок
                и комплектов медикаментов, средств личной гигиены. Но, что
                важнее, это тысячи изменившихся к лучшему жизней людей.
              </p>
            </>
          )}
        </FundText3>
      </AnimationWrapper>
      <Link to={settings.fundSectionUrl || "/"} borderBottomOnHover={false}>
        <AnimationWrapper>
          <FundButton
            uppercase
            className="about-fund-section__foundation-button"
            ellipsis
          >
            {settings.fundSectionUrlLabel || "Перейти на сайт фонда"}
          </FundButton>
        </AnimationWrapper>
      </Link>
      <Box
        backgroundColor={PaletteColor.White}
        className="about-fund-section__flower-box"
      >
        <StyledImage
          src={flower}
          className="about-fund-section__flower-picture"
        />
      </Box>
    </StyledAboutFundSection>
  );
};

export default AboutFundSection;
