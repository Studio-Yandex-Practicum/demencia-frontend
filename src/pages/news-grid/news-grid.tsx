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

const NewsGridPage: React.FC = () => {
  return (
    <Section borderBox flex centered>
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
      <Box flex absolute top="120px" left="75%" width="80px" height="80px">
        <img src={testGreenPuzzle} />
      </Box>
      <Box flex absolute top="120px" left="10%">
        <img src={purplePuzzle} />
      </Box>
      <Box flex absolute top="30px" right="0" width="140px" height="280px">
        <img src={purpleSemicircle} />
      </Box>
      <Box flex absolute bottom="15%" right="10%" width="120px" height="120px">
        <img src={purplePuzzleBottom} />
      </Box>
      <Box flex absolute bottom="10%" left="0" width="100px" height="200px">
        <img src={halfGreenPuzzle} />
      </Box>
      <Box flex absolute bottom="5%" right="0" width="100px" height="200px">
        <img src={halfGreenPuzzleTranslucent} />
      </Box>
      <MainTitle mb={10}>НОВОСТИ</MainTitle>
      <Grid mt={10}>
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
