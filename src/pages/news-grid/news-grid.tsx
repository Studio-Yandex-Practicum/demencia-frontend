import React from "react";
import { Grid, Section, MainTitle, Box } from "../../ui/controls";
import { PaletteColor } from "../../ui/types";
import { ScreenSize } from "../../ui/types";
import Card from "../../components/card";
import cardDefImg from "../../images/card-default-img.jpg";
import testGreenPuzzle from "../../images/test_green_puzzle.svg";
import purpleSemicircle from "../../images/purple-semicircle.svg";
import purplePuzzle from "../../images/purple-puzzle-translucent.svg";
import halfGreenPuzzle from "../../images/half-green-puzzle.svg";
import purplePuzzleBottom from "../../images/purple-puzzle-bottom.svg";
import halfGreenPuzzleTranslucent from "../../images/half-green-puzzle-translucent.svg";
import styled from "styled-components";

const StyledImg = styled.img<{
  puzzleType: string;
}>`
  z-index: 1;
  ${({ puzzleType }) => {
    if (puzzleType.includes("news-grid__green-puzzle")) {
      return `
        position: absolute;
        object-fit: contain;
        width: 4.7%;
        height: 5.7%;
        right: 190px;
        top: -.8%;

        @media (max-width: ${ScreenSize.Large}px) {
          & {
            width: 6%;
            height: 7%;
            right: 250px;
            top: .2%;
          }
        }

        @media (max-width: ${ScreenSize.Medium}px) {
          & {
            width: 8%;
            height: 9%;
            right: 200px;
            top: .8%;
          }
        }

        @media (max-width: ${ScreenSize.Small}px) {
          & {
            top: -2%;
          }
        }
        
        @media (max-width: ${ScreenSize.XSmall}px) {
          & {
            top: -2%;
            right: 100px;
            width: 10%;
          }
        }
      `;
    } else if (puzzleType.includes("news-grid__semicircle")) {
      return `
        position: absolute;
        top: -25px;
        right: 0;
        width: 8.9%;
        height: 19.5%;

        @media (max-width: ${ScreenSize.Large}px) {
          & {
              top: -110px;
              width: 12%;
          }
        }

        @media (max-width: ${ScreenSize.Medium}px) {
          & {
              top: -310px;
              width: 16%;
          }
        }

        @media (max-width: ${ScreenSize.Small}px) {
          & {
              top: -270px;
              width: 16%;
          }
        }

        @media (max-width: ${ScreenSize.XSmall}px) {
          & {
              top: -270px;
              width: 20%;
          }
        }
        `;
    } else if (puzzleType.includes("news-grid__purple-puzzle")) {
      return `
        position: absolute;
        width: 7.3%;
        height: 6.3%;
        left: 130px;
        top: 90px;

        @media (max-width: ${ScreenSize.Large}px) {
          & {
              height: 4.8%;
              width: 9%;
          }
        }
        @media (max-width: ${ScreenSize.Medium}px) {
          & {
              height: 3%;
              width: 11%;
              top: 70px;
          }
        }
        @media (max-width: ${ScreenSize.Small}px) {
          & {
              width: 15%;
              left: 100px;
          }
        }
        @media (max-width: ${ScreenSize.XSmall}px) {
          & {
              width: 25%;
              height: 1.5%;
              left: 25px;
              top: 90px;
          }
        }
        `;
    } else if (puzzleType.includes("news-grid__half-green-puzzle")) {
      return `
        position: absolute;
        width: 9.5%;
        height: 12.5%;
        bottom: 200px;
        left: 0;
        z-index: -1;

        @media (max-width: ${ScreenSize.Medium}px) {
          & {
              width: 25%;
              bottom: 280px;
          }
        }
        @media (max-width: ${ScreenSize.Small}px) {
          & {
              width: 18%;
              bottom: 36%;
          }
        }
        @media (max-width: ${ScreenSize.XSmall}px) {
          & {
              width: 36%;
              height: 15%;
          }
        }
        `;
    } else if (puzzleType.includes("news-grid__bottom-purple-puzzle")) {
      return `
        position: absolute;
        bottom: 440px;
        right: 50px;
        width: 8.5%;
        height: 4.5%;
        z-index: -1;

        @media (max-width: ${ScreenSize.Medium}px) {
          & {
            width: 10%;
            height: 6%;
            right: 320px;
            bottom: 350px;
          }
        }
        @media (max-width: ${ScreenSize.XSmall}px) {
          & {
            width: 20%;
            right: 120px;
            bottom: 300px;
            z-index: 2;
          }
        }
        `;
    } else if (
      puzzleType.includes("news-grid__translucent-half-green-puzzle")
    ) {
      return `
        position: absolute;
        bottom: 0;
        right: 0;
        width: 7.25%;
        height: 16.7%;
        z-index: -1;
     
        @media (max-width: ${ScreenSize.Medium}px) {
          & {
              width: 18%;
              height: 21%;
          }
        }
        @media (max-width: ${ScreenSize.Small}px) {
          & {
              bottom: 21%;
          }
        }
        @media (max-width: ${ScreenSize.XSmall}px) {
          & {
              bottom: 21%;
              width: 25%;
          }
        }
        `;
    } else {
      return ``;
    }
  }}
`;

const NewsGridPage: React.FC = () => {
  return (
    <Section borderBox flex centered>
      <StyledImg src={testGreenPuzzle} puzzleType="news-grid__green-puzzle" />
      <StyledImg src={purpleSemicircle} puzzleType="news-grid__semicircle" />
      <StyledImg src={purplePuzzle} puzzleType="news-grid__purple-puzzle" />
      <StyledImg
        src={halfGreenPuzzle}
        puzzleType="news-grid__half-green-puzzle"
      />
      <StyledImg
        src={purplePuzzleBottom}
        puzzleType="news-grid__bottom-purple-puzzle"
      />
      <StyledImg
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
