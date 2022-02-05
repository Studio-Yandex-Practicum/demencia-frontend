import React, { useEffect, useRef, useState } from "react";
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
  //Сначала получаем элементы, которые нужно анимировать.
  const titleElement: any = useRef(document.createElement("div"));
  const purplePuzzleElement: any = useRef(document.createElement("div"));
  const semiCircleElement: any = useRef(document.createElement("div"));
  const halfGreenPuzzleElement: any = useRef(document.createElement("div"));
  const halfGreenPuzzleTranslucentElement: any = useRef(
    document.createElement("div")
  );
  const greenBackgroundElement: any = useRef(document.createElement("div"));
  const purpleBackgroundElement: any = useRef(document.createElement("div"));

  //Стейты активации анимации
  const [titleElementAnimate, setTitleElementAnimate] = useState(false);
  const [purplePuzzleElementAnimate, setPurplePuzzleElementAnimate] =
    useState(false);
  const [semiCircleElementAnimate, setSemiCircleElementAnimate] =
    useState(false);
  const [halfGreenPuzzleElementAnimate, setHalfGreenPuzzleElementAnimate] =
    useState(false);
  const [
    halfGreenPuzzleTranslucentElementAnimate,
    setHalfGreenPuzzleTranslucentElementAnimate,
  ] = useState(false);
  const [greenBackgroundElementAnimate, setGreenBackgroundElementAnimate] =
    useState(false);
  const [purpleBackgroundElementAnimate, setPurpleBackgroundElementAnimate] =
    useState(false);

  //Стейты с координатами элементов по оси Y
  const [titleElementYcoord, setTitleElementYcoord] = useState(0);
  const [purplePuzzleElementYcoord, setPurplePuzzleElementYcoord] = useState(0);
  const [semiCircleElementYcoord, setSemiCircleElementYcoord] = useState(0);
  const [halfGreenPuzzleElementYcoord, setHalfGreenPuzzleElementYcoord] =
    useState(0);
  const [
    halfGreenPuzzleTranslucentElementYcoord,
    setHalfGreenPuzzleTranslucentElementYcoord,
  ] = useState(0);
  const [greenBackgroundElementYcoord, setGreenBackgroundElementYcoord] =
    useState(0);
  const [purpleBackgroundElementYcoord, setPurpleBackgroundElementYcoord] =
    useState(0);

  //Эффект с получением координат элементов. Т.к. при загрузке страницы useRef передаёт начальный элемент, и спустя мгновение передаёт нужные элементы, поэтому использую эффект при изменении хотя бы одного элемента element.current
  useEffect(() => {
    setTitleElementYcoord(titleElement.current.getBoundingClientRect().y);
    setPurplePuzzleElementYcoord(
      purplePuzzleElement.current.getBoundingClientRect().y
    );
    setSemiCircleElementYcoord(
      semiCircleElement.current.getBoundingClientRect().y
    );
    setHalfGreenPuzzleTranslucentElementYcoord(
      halfGreenPuzzleTranslucentElement.current.getBoundingClientRect().y
    );
    setHalfGreenPuzzleElementYcoord(
      halfGreenPuzzleElement.current.getBoundingClientRect().y
    );
    setGreenBackgroundElementYcoord(
      greenBackgroundElement.current.getBoundingClientRect().y
    );
    setPurpleBackgroundElementYcoord(
      purpleBackgroundElement.current.getBoundingClientRect().y
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleElement.current]);

  //Функция в которую передаём ивент, координату элемента и стейт изменения состояния активации анимации
  //Функция сравнивает координаты по Y элемента и окна браузера
  const inViewHandler = (
    e: any,
    yCoord: number,
    state: {
      (value: React.SetStateAction<boolean>): void;
      (arg0: boolean): void;
    }
  ) => {
    if (
      e.target.documentElement.scrollTop <= yCoord &&
      yCoord <= e.target.documentElement.scrollTop + window.innerHeight
    ) {
      state(false);
    } else {
      state(true);
    }
  };

  //Эффект с добавлением слушателя по скроллу и объявлением функций
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      inViewHandler(e, titleElementYcoord, setTitleElementAnimate);
      inViewHandler(
        e,
        purplePuzzleElementYcoord,
        setPurplePuzzleElementAnimate
      );
      inViewHandler(e, semiCircleElementYcoord, setSemiCircleElementAnimate);
      inViewHandler(
        e,
        halfGreenPuzzleTranslucentElementYcoord,
        setHalfGreenPuzzleTranslucentElementAnimate
      );
      inViewHandler(
        e,
        halfGreenPuzzleElementYcoord,
        setHalfGreenPuzzleElementAnimate
      );
      inViewHandler(
        e,
        greenBackgroundElementYcoord,
        setGreenBackgroundElementAnimate
      );
      inViewHandler(
        e,
        purpleBackgroundElementYcoord,
        setPurpleBackgroundElementAnimate
      );
    });

    return function () {
      document.removeEventListener("scroll", (e) => {
        inViewHandler(e, titleElementYcoord, setTitleElementAnimate);
        inViewHandler(
          e,
          purplePuzzleElementYcoord,
          setPurplePuzzleElementAnimate
        );
        inViewHandler(e, semiCircleElementYcoord, setSemiCircleElementAnimate);
        inViewHandler(
          e,
          halfGreenPuzzleTranslucentElementYcoord,
          setHalfGreenPuzzleTranslucentElementAnimate
        );
        inViewHandler(
          e,
          halfGreenPuzzleElementYcoord,
          setHalfGreenPuzzleElementAnimate
        );
        inViewHandler(
          e,
          greenBackgroundElementYcoord,
          setGreenBackgroundElementAnimate
        );
        inViewHandler(
          e,
          purpleBackgroundElementYcoord,
          setPurpleBackgroundElementAnimate
        );
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleElementYcoord]);

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

  const newsArticlesData = data.newsArticles.filter((item) => !!item);

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
    <Section flex centered mb={2}>
      <StyledImage src={testGreenPuzzle} puzzleType="news-grid__green-puzzle" />
      <StyledImage
        src={purpleSemicircle}
        puzzleType="news-grid__semicircle"
        ref={semiCircleElement}
        animate={semiCircleElementAnimate}
      />
      <StyledImage
        src={purplePuzzle}
        puzzleType="news-grid__purple-puzzle"
        ref={purplePuzzleElement}
        animate={purplePuzzleElementAnimate}
      />
      <StyledImage
        src={halfGreenPuzzle}
        puzzleType="news-grid__half-green-puzzle"
        ref={halfGreenPuzzleElement}
        animate={halfGreenPuzzleElementAnimate}
      />
      <StyledImage
        src={purplePuzzleBottom}
        puzzleType="news-grid__bottom-purple-puzzle"
      />
      <StyledImage
        src={halfGreenPuzzleTranslucent}
        puzzleType="news-grid__translucent-half-green-puzzle"
        ref={halfGreenPuzzleTranslucentElement}
        animate={halfGreenPuzzleTranslucentElementAnimate}
      />
      <Box
        backgroundColor={PaletteColor.LightGreen}
        height="775px"
        width="100%"
        flex
        absolute
        top="160px"
        ref={greenBackgroundElement}
        animate={greenBackgroundElementAnimate}
      />
      <Box
        backgroundColor={PaletteColor.DarkPurple}
        height="630px"
        width="80%"
        flex
        absolute
        top="870px"
        ref={purpleBackgroundElement}
        animate={purpleBackgroundElementAnimate}
      />
      <MainTitle mb={10} ref={titleElement} animate={titleElementAnimate}>
        НОВОСТИ
      </MainTitle>
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
