import React from "react";
import Heading from "./heading";
import NewsGridBackground from "./background/news-grid-background";
import NewsGridPuzzle from "./background/news-grid-puzzle";
import Card from "./card";
import cardImage from "../../images/unsplash.jpg";
import testGreenPuzzle from "../../images/test_green_puzzle.svg";
import purpleSemicircle from "../../images/purple-semicircle.svg";
import purplePuzzle from "../../images/purple-puzzle.svg";
import halfGreenPuzzle from "../../images/half-green-puzzle.svg";
import purplePuzzleBottom from "../../images/purple-puzzle-bottom.svg";
import halfGreenPuzzleTranslucent from "../../images/half-green-puzzle-translucent.svg";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const NewsGridSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  max-width: 1920px;
`;

const NewsGridList = styled.ul`
  display: grid;
  justify-content: center;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(280px, 450px));
  grid-auto-flow: row;
  justify-items: center;
  gap: 100px 45px;
  margin: 0 auto 0;
  list-style-type: none;
  padding: 105px 0 0;

  @media (max-width: 1500px) {
    gap: 85px 35px;
  }

  @media (max-width: 947px) {
    gap: 85px 15px;
  }
`;

const NewsGridPage: React.FC = () => {
  return (
    <Section>
      <Heading>НОВОСТИ</Heading>
      <NewsGridPuzzle
        puzzleImageSource={testGreenPuzzle}
        newsGridPuzzleClass="news-grid__green-puzzle rotation"
      />
      <NewsGridPuzzle
        puzzleImageSource={purpleSemicircle}
        newsGridPuzzleClass="news-grid__semicircle _active"
      />
      <NewsGridPuzzle
        puzzleImageSource={purplePuzzle}
        newsGridPuzzleClass="news-grid__purple-puzzle"
      />
      <NewsGridSection>
        <NewsGridBackground newsGridBackgroundClass="news-grid__background news-grid__background_theme_lightgreen _active" />
        <NewsGridBackground newsGridBackgroundClass="news-grid__background news-grid__background_theme_purple _active" />
        <NewsGridPuzzle
          puzzleImageSource={halfGreenPuzzle}
          newsGridPuzzleClass="news-grid__half-green-puzzle _active"
        />
        <NewsGridPuzzle
          puzzleImageSource={purplePuzzleBottom}
          newsGridPuzzleClass="news-grid__purple-puzzle-bottom rotation"
        />
        <NewsGridPuzzle
          puzzleImageSource={halfGreenPuzzleTranslucent}
          newsGridPuzzleClass="news-grid__half-green-puzzle-translucent _active"
        />
        <NewsGridList>
          <Card
            cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
            cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
            cardDateTime="2021-10-01"
            cardDateTimeText="01.10.2021"
            imageSource={cardImage}
            cardLinkTo="/article"
          />
          <Card
            cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
            cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
            cardDateTime="2021-10-01"
            cardDateTimeText="01.10.2021"
            imageSource={cardImage}
            cardLinkTo="/article"
          />
          <Card
            cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
            cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
            cardDateTime="2021-10-01"
            cardDateTimeText="01.10.2021"
            imageSource={cardImage}
            cardLinkTo="/article"
          />
          <Card
            cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
            cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
            cardDateTime="2021-10-01"
            cardDateTimeText="01.10.2021"
            imageSource={cardImage}
            cardLinkTo="/article"
          />
          <Card
            cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
            cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
            cardDateTime="2021-10-01"
            cardDateTimeText="01.10.2021"
            imageSource={cardImage}
            cardLinkTo="/article"
          />
          <Card
            cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
            cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
            cardDateTime="2021-10-01"
            cardDateTimeText="01.10.2021"
            imageSource={cardImage}
            cardLinkTo="/article"
          />
          <Card
            cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
            cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
            cardDateTime="2021-10-01"
            cardDateTimeText="01.10.2021"
            imageSource={cardImage}
            cardLinkTo="/article"
          />
          <Card
            cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
            cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
            cardDateTime="2021-10-01"
            cardDateTimeText="01.10.2021"
            imageSource={cardImage}
            cardLinkTo="/article"
          />
          <Card
            cardHeading="В Москве открылись пункты для диагностики болезни Альцгеймера и других когнитивных изменений"
            cardText="1 октября в рамках проекта Деменция.net благотворительного фонда «Память поколений» открылись корнеры по ранней диагностике когнитивных изменений."
            cardDateTime="2021-10-01"
            cardDateTimeText="01.10.2021"
            imageSource={cardImage}
            cardLinkTo="/article"
          />
        </NewsGridList>
      </NewsGridSection>
    </Section>
  );
};

export default NewsGridPage;
