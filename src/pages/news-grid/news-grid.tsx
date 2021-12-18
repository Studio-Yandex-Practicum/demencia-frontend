import React from "react";
import Header from "./header/header";
import Main from "./main/main";
import Section from "./main/section";
import Heading from "./main/heading";
import NewsGridBackground from "./background/news-grid-background";
import NewsGridPuzzle from "./background/news-grid-puzzle";
import NewsGridSection from "./main/news-grid-section";
import NewsGridList from "./main/news-grid-list";
import Card from "./main/card";
import Footer from "./footer/footer";
import cardImage from "../../images/unsplash.jpg";
import testGreenPuzzle from "../../images/test_green_puzzle.svg";
import purpleSemicircle from "../../images/purple-semicircle.svg";
import purplePuzzle from "../../images/purple-puzzle.svg";
import halfGreenPuzzle from "../../images/half-green-puzzle.svg";
import purplePuzzleBottom from "../../images/purple-puzzle-bottom.svg";
import halfGreenPuzzleTranslucen from "../../images/half-green-puzzle-translucent.svg";

const NewsGridPage: React.FC = () => {
  return (
    <div className="page page_page_news-grid">
      <Header />
      <Main>
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
              puzzleImageSource={halfGreenPuzzleTranslucen}
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
            </NewsGridList>
          </NewsGridSection>
        </Section>
      </Main>
      <Footer />
    </div>
  );
};

export default NewsGridPage;
