import { FC } from "react";
import { Subtitle3, Section, Box } from "../../ui/controls";
import { TwoColumnGrid } from "../../ui/controls/layout";
import { TextColor, TypographyLevel } from "../../ui/types";
import testGreenPuzzle from "../../images/test_green_puzzle.svg";
import {
  StyledSubtitle1,
  StyledText2,
  StyledText2Strong,
  StyledImage,
  StyledTextForList,
  StyledList,
  StyledTextStrong,
} from "./videocurses-styles";

const VideoCoursesPage: FC = () => {
  return (
    <Section flex centered mb={2}>
      <StyledSubtitle1
        maxWidth={1026}
        uppercase={false}
        level={TypographyLevel.Subtitle1}
      >
        Видеокурс
      </StyledSubtitle1>
      <StyledSubtitle1
        maxWidth={1026}
        uppercase={false}
        level={TypographyLevel.Subtitle1}
      >
        &laquo;Все о&nbsp;деменции за&nbsp;60&nbsp;минут&raquo;
      </StyledSubtitle1>
      <Box mb={2}>
        <StyledText2 mt={6}>
          Уникальный <StyledText2Strong>бесплатный</StyledText2Strong> видеокурс
          о&nbsp;здоровье мозга создан при поддержке Фонда президентских
          грантов.
        </StyledText2>
      </Box>
      <TwoColumnGrid>
        <Subtitle3 mt={2} textColor={TextColor.Accent2} uppercase={false}>
          Всего лишь за 60 минут вы узнаете:
        </Subtitle3>
        <StyledList>
          <Box mt={2}>
            <li>
              <StyledTextForList textColor={TextColor.Primary} mr={4}>
                Что предпринять при проблемах с памятью?
              </StyledTextForList>
            </li>
          </Box>
          <li>
            <StyledTextForList textColor={TextColor.Primary} mr={4}>
              Как остановить прогресс потери памяти?
            </StyledTextForList>
          </li>
          <li>
            <StyledTextForList textColor={TextColor.Primary} mr={4}>
              Как позаботиться о близком, если он теряет память?
            </StyledTextForList>
          </li>
        </StyledList>
      </TwoColumnGrid>
      <Box mb={2}>
        <StyledText2 mt={6}>
          Смотрите до&nbsp;конца, и&nbsp;вы&nbsp;узнаете всё о&nbsp;деменции
          и&nbsp;проблемах с&nbsp;памятью!
        </StyledText2>
        <StyledTextStrong>Будьте здоровы!</StyledTextStrong>
      </Box>
      <StyledImage src={testGreenPuzzle} puzzleType="news-grid__green-puzzle" />
      <></>
    </Section>
  );
};

export default VideoCoursesPage;
