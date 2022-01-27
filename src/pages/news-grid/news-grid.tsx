import React from "react";
import { Grid, Section, MainTitle, Box } from "../../ui/controls";
import { PaletteColor } from "../../ui/types";
import Card from "../../components/card";
import cardDefImg from "../../images/default-image.png";
import testGreenPuzzle from "../../images/test_green_puzzle.svg";
import purpleSemicircle from "../../images/purple-semicircle.svg";
import purplePuzzle from "../../images/purple-puzzle-translucent.svg";
import halfGreenPuzzle from "../../images/half-green-puzzle.svg";
import purplePuzzleBottom from "../../images/purple-puzzle-bottom.svg";
import halfGreenPuzzleTranslucent from "../../images/half-green-puzzle-translucent.svg";
import StyledImage from "./styled-image";

import { useQuery } from "@apollo/client";
import { NewsArticlesData } from "../../types/news";
import { toast } from "react-hot-toast";
import { Subtitle3 } from "../../ui/controls/typography";
import { GET_NEWS_ARTICLES } from "../../gql/query/news";

const Empty: React.FC = () => (
  <Section borderBox flex centered>
    <MainTitle mb={5}>НОВОСТИ</MainTitle>
    <Subtitle3>Список пуст</Subtitle3>
  </Section>
);

const NewsGridPage: React.FC = () => {
  const { loading, data, error } =
    useQuery<NewsArticlesData>(GET_NEWS_ARTICLES);

  if (loading) {
    return (
      <Section flex centered>
        <Subtitle3>Загрузка...</Subtitle3>
      </Section>
    );
  }

  if (error) {
    toast.error(`${error}`, { id: "error" });
    return <Empty />;
  }

  if (!data) {
    return <Empty />;
  }

  if (!data.newsArticles || data.newsArticles.length === 0) {
    return <Empty />;
  }

  const newsArticlesData = data.newsArticles.filter(
    (item) => item && item.isActive
  );

  newsArticlesData.sort(function (a, b) {
    if (a.createdAt > b.createdAt) {
      return -1;
    }
    if (a.createdAt < b.createdAt) {
      return 1;
    }

    return 0;
  });

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
      />
      <Box
        backgroundColor={PaletteColor.DarkPurple}
        height="800px"
        width="80%"
        flex
        absolute
        top="875px"
      />

      <MainTitle mb={10}>НОВОСТИ</MainTitle>
      <Grid mt={10} zIndex={2} pl={5} pr={5}>
        {newsArticlesData.map((article) => {
          const date = new Date(article.createdAt || "");
          const formattedDate = date.toLocaleString("ru-RU", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          });
          return (
            <Card
              key={article.createdAt}
              cardHeading={article.title || "Заголовок новости"}
              cardText={article.subTitle}
              cardDateTime={article.createdAt}
              cardDateTimeText={formattedDate || "Дата новости"}
              imageSource={article.image || cardDefImg}
              cardLinkTo={`/article/${article.id}`}
            />
          );
        })}
      </Grid>
    </Section>
  );
};

export default NewsGridPage;
