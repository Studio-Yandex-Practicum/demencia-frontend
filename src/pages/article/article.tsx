import React from "react";
import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";
import purplePuzzleImg from "../../images/article-purple-puzzle.svg";
import greenPuzzleImg from "../../images/article-green-puzzle.svg";
import purpleSemicircleImg from "../../images/purple-semicircle.svg";
import { Subtitle3 } from "../../ui/controls";
import { Section } from "../../ui/controls/layout";
import { Text1 } from "../../ui/controls/typography";
import { ArticleDate, DecorationText, MainTitleArticle } from "./typography";
import {
  ArticleBackground,
  ArticleLink,
  GreenPuzzle,
  PurplePuzzle,
  PurpleSemicircle,
  StyledImage,
} from "./decor";
import {
  ArticleItemBox,
  ArticleTextBox,
  DescriptionBox,
  ImageBox,
} from "./box";
import { useQuery } from "@apollo/client";
import { NewsArticleData } from "../../types/news";
import { GET_NEWS_ARTICLE } from "../../gql/query/news";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const Empty: React.FC = () => (
  <Section borderBox flex centered>
    <Subtitle3>Новость не найдена</Subtitle3>
  </Section>
);

const ArticlePage: React.FC = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery<NewsArticleData>(GET_NEWS_ARTICLE, {
    variables: { id },
  });

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

  const article = data.newsArticle;

  const date = new Date(article.createdAt || "");
  const formattedDate = date.toLocaleString("ru-RU", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  return (
    <>
      <Section flex>
        <MainTitleArticle>{article.title}</MainTitleArticle>
        <ArticleDate>{formattedDate}</ArticleDate>
        <PurplePuzzle src={purplePuzzleImg} alt="." />
      </Section>

      <Section flex centered>
        <ArticleBackground />
        <ArticleItemBox>
          <ImageBox>
            <GreenPuzzle src={greenPuzzleImg} alt="." />
            <StyledImage src={article.image} alt="." />
          </ImageBox>

          <DescriptionBox>
            <PurpleSemicircle src={purpleSemicircleImg} alt="." />
            <DecorationText mt={1}>{article.subTitle}</DecorationText>
          </DescriptionBox>

          <ArticleTextBox mt={4}>
            <Text1>{ReactHtmlParser(DOMPurify.sanitize(article.text))}</Text1>
          </ArticleTextBox>
          <ArticleTextBox mt={3} zoomOnHover maxWidth={350}>
            <ArticleLink to="/news-grid" zoomTextOnHover={false}>
              Перейти к ленте новостей
            </ArticleLink>
          </ArticleTextBox>
        </ArticleItemBox>
      </Section>
    </>
  );
};

export default ArticlePage;
