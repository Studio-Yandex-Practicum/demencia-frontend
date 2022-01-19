import React from "react";
import { Grid, Section, MainTitle, Box } from "../../ui/controls";
import { PaletteColor } from "../../ui/types";
import Card from "../../components/card";
import cardDefImg from "../../images/card-default-img.jpg";
import testGreenPuzzle from "../../images/test_green_puzzle.svg";
import purpleSemicircle from "../../images/purple-semicircle.svg";
import purplePuzzle from "../../images/purple-puzzle-translucent.svg";
import halfGreenPuzzle from "../../images/half-green-puzzle.svg";
import purplePuzzleBottom from "../../images/purple-puzzle-bottom.svg";
import halfGreenPuzzleTranslucent from "../../images/half-green-puzzle-translucent.svg";
import StyledImage from "./styled-image";

const NewsGridPage: React.FC = () => {
  return (
    <Section borderBox flex centered>
      <StyledImage src={testGreenPuzzle} puzzleType="news-grid__green-puzzle" />
      <StyledImage src={purpleSemicircle} puzzleType="news-grid__semicircle" />
      <StyledImage src={purplePuzzle} puzzleType="news-grid__purple-puzzle" />
      <StyledImage
        src={halfGreenPuzzle}
        puzzleType="news-grid__half-green-puzzle"
      />
      <StyledImage
        src={purplePuzzleBottom}
        puzzleType="news-grid__bottom-purple-puzzle"
      />
      <StyledImage
        src={halfGreenPuzzleTranslucent}
        puzzleType="news-grid__translucent-half-green-puzzle"
      />
      <Box
        backgroundColor={PaletteColor.LightGreen}
        height="775px"
        width="100%"
        flex
        absolute
        top="160px"
      ></Box>
      <Box
        backgroundColor={PaletteColor.DarkPurple}
        height="800px"
        width="80%"
        flex
        absolute
        top="875px"
      ></Box>

      <MainTitle mb={10}>НОВОСТИ</MainTitle>
      <Grid mt={10} zIndex={2}>
        <Card
          cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
          cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений. 1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
          cardDateTime="2021-10-01"
          cardDateTimeText="01.10.2021"
          imageSource={cardDefImg}
          cardLinkTo="/article"
        />
        <Card
          cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
          cardText="1 октября в рамках проекта Деменция.net."
          cardDateTime="2021-10-01"
          cardDateTimeText="01.10.2021"
          imageSource={cardDefImg}
          cardLinkTo="/article"
        />
        <Card
          cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
          cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
          cardDateTime="2021-10-01"
          cardDateTimeText="01.10.2021"
          imageSource={cardDefImg}
          cardLinkTo="/article"
        />
        <Card
          cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
          cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
          cardDateTime="2021-10-01"
          cardDateTimeText="01.10.2021"
          imageSource={cardDefImg}
          cardLinkTo="/article"
        />
        <Card
          cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
          cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
          cardDateTime="2021-10-01"
          cardDateTimeText="01.10.2021"
          imageSource={cardDefImg}
          cardLinkTo="/article"
        />
        <Card
          cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
          cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
          cardDateTime="2021-10-01"
          cardDateTimeText="01.10.2021"
          imageSource={cardDefImg}
          cardLinkTo="/article"
        />
        <Card
          cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
          cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
          cardDateTime="2021-10-01"
          cardDateTimeText="01.10.2021"
          imageSource={cardDefImg}
          cardLinkTo="/article"
        />
        <Card
          cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
          cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
          cardDateTime="2021-10-01"
          cardDateTimeText="01.10.2021"
          imageSource={cardDefImg}
          cardLinkTo="/article"
        />
        <Card
          cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
          cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
          cardDateTime="2021-10-01"
          cardDateTimeText="01.10.2021"
          imageSource={cardDefImg}
          cardLinkTo="/article"
        />
      </Grid>
    </Section>
  );
};

export default NewsGridPage;
