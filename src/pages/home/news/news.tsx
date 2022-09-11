import React from "react";
import styled from "styled-components";
import { Section } from "../../../ui/controls/layout";
import { Box, Button } from "../../../ui/controls";
import {
  ButtonType,
  PaletteColor,
  ScreenSize,
  TextColor,
  TypographyLevel,
} from "../../../ui/types";
import { Title, Text3, Subtitle3 } from "../../../ui/controls/typography";
import { useQuery } from "@apollo/client";
import { SettingsData } from "../../../types/settings";
import { GET_SETTINGS } from "../../../gql/query/settings";
import AnimationWrapper from "../../../components/animation-wrapper";
import { NewsArticlesData } from "../../../types/news";
import { GET_NEWS_ARTICLES } from "../../../gql/query/news";
import { useNavigate } from "react-router-dom";
import NewsCard from "./newsCard";

const BoxVideoContainer = styled(Box)`
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    flex-wrap: wrap;
  }
`;

const StyledBox = styled(Box)`
  @media (max-width: ${ScreenSize.Medium}px) {
    flex-wrap: wrap;
  }
  transition: all 1s ease;
  ${({ animate }) =>
    animate ? "opacity: 0; transform: translateY(100px);" : ""}
`;

const CenteredBox = styled(Box)`
  justify-content: center;
`;

const StyledTitle = styled(Title)`
  transition: all 1s ease;
  transition-duration: 0.7s;
  transition-delay: 1;
  ${({ animate }) =>
    animate ? "opacity: 0; transform: translateX(-200px);" : ""}
  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 30px;
  }
`;

const StyledText3 = styled(Text3)`
  font-size: 18px !important;
  transition: all 1s ease;
  ${({ animate }) =>
    animate ? "opacity: 0; transform: translateX(-200px);" : ""}
`;

const DefaultCaption: React.FC<{ title: string }> = ({ title }) => <>{title}</>;

const News: React.FC = () => {
  const navigate = useNavigate();
  const { data } = useQuery<SettingsData>(GET_SETTINGS, {
    fetchPolicy: "cache-first",
  });

  const onClick = () => {
    navigate("/news-grid");
  };

  const arr = useQuery<NewsArticlesData>(GET_NEWS_ARTICLES);
  const items = arr.data?.newsArticles.filter((el) => !!el);

  if (!data || !data.settings.newsSection)
    return <DefaultCaption title="Что нового?" />;

  if (!data || !data.settings.newsSectionUrlLabel)
    return <DefaultCaption title="Лента новостей" />;

  const sectionTitle = data.settings.newsSection;
  const linkTitle = data.settings.newsSectionUrlLabel;

  if (!sectionTitle.length) return <DefaultCaption title="Что нового?" />;
  if (!linkTitle.length) return <DefaultCaption title="Лента новостей" />;

  return (
    <Section flex centered backgroundColor={PaletteColor.LightGreen}>
      <Box
        mt={3}
        mb={11}
        pl={6}
        pr={6}
        flex
        column
        maxWidth={1752}
        width="100%"
      >
        <Box mb={5}>
          <Box flex maxWidth={530}>
            <AnimationWrapper>
              <StyledTitle ellipsis>{sectionTitle}</StyledTitle>
            </AnimationWrapper>
          </Box>
          <AnimationWrapper>
            <StyledText3 uppercase={true} ellipsis>
              {linkTitle}
            </StyledText3>
          </AnimationWrapper>
        </Box>
        <AnimationWrapper>
          <StyledBox flex gap="20px" width="100%">
            {items
              ?.slice(0, 4)
              .map(
                ({
                  id,
                  image,
                  title = "Заголовок новости",
                  subTitle = "Скоро тут появится интересная новость",
                  urlLabel = "Подробнее",
                }) => {
                  return (
                    <NewsCard
                      key={id}
                      id={id}
                      image={image}
                      title={title}
                      subTitle={subTitle}
                      urlLabel={urlLabel}
                    />
                  );
                }
              )}
          </StyledBox>
        </AnimationWrapper>

        <CenteredBox flex mt={7} mb={7}>
          <Button
            type={ButtonType.Secondary}
            level={TypographyLevel.Subtitle3}
            onClick={onClick}
          >
            Все новости
          </Button>
        </CenteredBox>
        <BoxVideoContainer flex gap="40px">
          <Box width="100%">
            <iframe
              width="100%"
              height="314px"
              src="https://rutube.ru/play/embed/68eaf9ac4e89d3421a9c8cada1dfb3be"
              frameBorder="0"
            ></iframe>
            <Box mt={2}>
              <Subtitle3 uppercase={true} textColor={TextColor.Primary}>
                Проект Деменция.net благотворительного фонда «Память поколений».
                Пройдите тест на сайте Деменция.net
              </Subtitle3>
            </Box>
          </Box>
          <Box width="100%">
            <iframe
              width="100%"
              height="314px"
              src="https://rutube.ru/play/embed/c69565afe0f59e85b55c6faeefd1aaa3"
              frameBorder="0"
            ></iframe>
            <Box mt={2}>
              <Subtitle3 uppercase={true} textColor={TextColor.Primary}>
                Проект Деменция.net благотворительного фонда «Память поколений».
                Пройдите тест на сайте Деменция.net
              </Subtitle3>
            </Box>
          </Box>
        </BoxVideoContainer>
      </Box>
    </Section>
  );
};

export default News;
