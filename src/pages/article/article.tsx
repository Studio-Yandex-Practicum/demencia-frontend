import React from "react";
import purplePuzzleImg from "../../images/article-purple-puzzle.svg";
import greenPuzzleImg from "../../images/article-green-puzzle.svg";
import purpleSemicircleImg from "../../images/purple-semicircle.svg";
import styled from "styled-components";
import { Link, Box } from "../../ui/controls";
import { Section } from "../../ui/controls/layout";
import { Text1 } from "../../ui/controls/typography";
import { ArticleDate, DecorationText, MainTitleArticle } from "./typography";
import {
  ArticleBackground,
  GreenPuzzle,
  PurplePuzzle,
  PurpleSemicircle,
} from "./decor";
import { ArticleItemBox, DescriptionBox, ImageBox } from "./box";
import { ScreenSize } from "../../ui/types";
import { useQuery } from "@apollo/client";
import { NewsArticlesData } from "../../types/news";
import { GET_NEWS_ARTICLES } from "../../gql/query/news";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const Cover = styled.img`
  width: 100%;

  @media (max-width: ${ScreenSize.XSmall}px) {
    width: calc(100% - 32px);
    margin-left: 16px;
  }
`;

const Empty: React.FC = () => (
  <Box mt={2}>
    <p>Новостей нет</p>
  </Box>
);

const ArticlePage: React.FC = () => {
  const { id } = useParams();

  const { data, loading, error } =
    useQuery<NewsArticlesData>(GET_NEWS_ARTICLES);

  if (loading) {
    return (
      <Box mt={2}>
        <p>Загрузка...</p>
      </Box>
    );
  }

  if (error) {
    toast.error(`${error}`, { id: "error" });
    return <Empty />;
  }

  if (!data || !id) {
    return <Empty />;
  }

  const items = data.newsArticles.filter((el) => el.id === id);

  if (!items.length) {
    return <Empty />;
  }

  return (
    <>
      {items.map((item) => (
        <>
          <Section flex mt={4}>
            <MainTitleArticle>{item.title}</MainTitleArticle>
            <ArticleDate>
              {`${item.createdAt.slice(8, 10)}
               .${item.createdAt.slice(5, 7)}
              .${item.createdAt.slice(0, 4)}`}
            </ArticleDate>
            <PurplePuzzle src={purplePuzzleImg} alt="." />
          </Section>

          <Section flex centered>
            <ArticleBackground />
            <ArticleItemBox>
              <ImageBox>
                <GreenPuzzle src={greenPuzzleImg} alt="." />
                <Cover src={item.image} alt="." />
              </ImageBox>

              <DescriptionBox>
                <PurpleSemicircle src={purpleSemicircleImg} alt="." />
                <DecorationText mt={4}>{item.subTitle}</DecorationText>
              </DescriptionBox>

              <Box mt={4}>
                <Text1>{item.text}</Text1>
              </Box>
              <Box mt={3}>
                <Link to="/news-grid">Перейти к ленте новостей</Link>
              </Box>
            </ArticleItemBox>
          </Section>
        </>
      ))}
    </>
  );
};

export default ArticlePage;
