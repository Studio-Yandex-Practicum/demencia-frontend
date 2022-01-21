import React from "react";
import { Grid, Section, MainTitle, Box, Subtitle1 } from "../../ui/controls";
import { PaletteColor } from "../../ui/types";
import Card from "../../components/card";
import Preloader from "../../components/preloader";
import cardDefImg from "../../images/card-default-img.jpg";
import testGreenPuzzle from "../../images/test_green_puzzle.svg";
import purpleSemicircle from "../../images/purple-semicircle.svg";
import purplePuzzle from "../../images/purple-puzzle-translucent.svg";
import halfGreenPuzzle from "../../images/half-green-puzzle.svg";
import purplePuzzleBottom from "../../images/purple-puzzle-bottom.svg";
import halfGreenPuzzleTranslucent from "../../images/half-green-puzzle-translucent.svg";
import StyledImage from "./styled-image";

import { GET_NEWS_ARTICLES } from "../../gql/query";
import { useQuery } from "@apollo/client";
import { NewsArticlesData } from "../../types";
import { toast } from "react-hot-toast";
import { MEDIA_BASE_URL } from "../../constants";

const Empty: React.FC = () => (
  <Section borderBox flex centered>
    <MainTitle mb={5}>НОВОСТИ</MainTitle>
    <Subtitle1>Список пуст</Subtitle1>
    <Preloader />
  </Section>
);

const NewsGridPage: React.FC = () => {
  const { data, error } = useQuery<NewsArticlesData>(GET_NEWS_ARTICLES);

  if (error) {
    toast.error(`${error}`, { id: "error" });
    return <Empty />;
  }

  if (!data) {
    return <Empty />;
  }

  const newsArticlesData = data.newsArticles;

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
        {newsArticlesData.map((article) => {
          const date = new Date(article.createdAt || "");
          const formattedDate = date.toLocaleString("default", {
            day: "numeric",
            month: "numeric",
            year: "numeric",
          });
          return (
            <Card
              key={article.createdAt}
              cardHeading={article.title || "Заголовок новости"}
              cardText={article.subTitle || "Описание новости"}
              cardDateTime={article.createdAt}
              cardDateTimeText={formattedDate || "Дата новости"}
              imageSource={`${MEDIA_BASE_URL}${article.image}` || cardDefImg}
              cardLinkTo={article.url || "#"}
            />
          );
        })}
      </Grid>
    </Section>
  );
};

export default NewsGridPage;
