import { FC } from "react";
import { Subtitle1, Subtitle3, Section, Text2, Box } from "../../ui/controls";
import { SeparatedColumn, TwoColumnGrid } from "../../ui/controls/layout";
import {
  ButtonType,
  TextColor,
  TypographyLevel,
  ScreenSize,
} from "../../ui/types";
import styled from "styled-components";
import testGreenPuzzle from "../../images/test_green_puzzle.svg";
import StyledImage from "../news-grid/styled-image";

const VideoCoursesPage: FC = () => {
  const List = styled.ul<{
    color?: string;
  }>`
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `;

  return (
    <Section flex centered mb={2}>
      <Subtitle1
        maxWidth={1026}
        uppercase={false}
        level={TypographyLevel.Subtitle1}
      >
        Видеокурс
      </Subtitle1>
      <Subtitle1
        maxWidth={1026}
        uppercase={false}
        level={TypographyLevel.Subtitle1}
      >
        &laquo;Все о&nbsp;деменции за&nbsp;60&nbsp;минут&raquo;
      </Subtitle1>
      <Box mb={2}>
        <Text2 mt={6}>
          Уникальный <b>бесплатный</b> видеокурс о&nbsp;здоровье мозга создан
          при поддержке Фонда президентских грантов.
        </Text2>
      </Box>
      <TwoColumnGrid>
        <Subtitle3 mt={2} textColor={TextColor.Accent2} uppercase={false}>
          Всего лишь за 60 минут вы узнаете:
        </Subtitle3>
        <List>
          <Box mt={2}>
            <li>
              <Text2 textColor={TextColor.Primary} mr={4}>
                Что предпринять при проблемах с памятью?
              </Text2>
            </li>
          </Box>
          <li>
            <Text2 textColor={TextColor.Primary} mr={4}>
              Как остановить прогресс потери памяти?
            </Text2>
          </li>
          <li>
            <Text2 textColor={TextColor.Primary} mr={4}>
              Как позаботиться о близком, если он теряет память?
            </Text2>
          </li>
        </List>
      </TwoColumnGrid>
      <Box mb={2}>
        <Text2 mt={6}>
          Смотрите до&nbsp;конца, и&nbsp;вы&nbsp;узнаете всё о&nbsp;деменции
          и&nbsp;проблемах с&nbsp;памятью! Будьте здоровы!
        </Text2>
        <Text2>Будьте здоровы!</Text2>
      </Box>
      <StyledImage src={testGreenPuzzle} puzzleType="news-grid__green-puzzle" />
      <></>
    </Section>
  );
};

export default VideoCoursesPage;
