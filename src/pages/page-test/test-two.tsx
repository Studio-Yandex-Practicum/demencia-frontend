import React from "react";
import { Section } from "../../ui/controls";
import { Box, Button } from "../../ui/controls";
import {
  ButtonType,
  TextColor,
  TypographyLevel,
  ScreenSize,
} from "../../ui/types";
import { BackgroundColor } from "../../ui/types/background-color.enum";
import { Subtitle3, Subtitle1, Text1, Text2 } from "../../ui/controls";
import { ArrowLeft, ArrowRight } from "./decor";
import styled from "styled-components";

const StyleArrowLeft = styled(ArrowLeft)`
  margin-right: 20px;
`;

const StyledBox = styled(Box)`
  position: relative;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  @media (max-width: ${ScreenSize.XSmall}px) {
    flex-direction: column;
  }
`;

const StyledTestBox = styled(Box)`
  text-align: left;
  max-width: 1026px;
`;

const StyledButtonBox = styled(Box)`
  padding-top: 0;
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-top: 40px;
  }
`;

const StyleText1 = styled(Text1)`
  font-size: 26px;
  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 18px;
  }
`;

const StyleButton = styled(Button)`
  text-aling: center;
  margin: 0 auto;
  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 14px;
  }
`;

const TestText: React.FC = () => {
  return (
    <Box>
      <Section flex centered borderBox pt={7}>
        <StyledTestBox flex column>
          <Subtitle1
            maxWidth={1026}
            textColor={TextColor.Accent2}
            uppercase={false}
            level={TypographyLevel.Subtitle1}
          >
            Как выполнять тест?
          </Subtitle1>
          <Box pt={3} pb={3}>
            <Text2 maxWidth={1026} mb={2} textColor={TextColor.Primary}>
              Во время прохождения теста нельзя использовать калькулятор,
              календарь, часы. Вам необходимо сделать максимальное количество
              заданий.
            </Text2>
            <Text1 maxWidth={1026} mb={1} textColor={TextColor.Primary}>
              1. Для правильного прохождения вопросов с рисунками (2 вопроса в
              тесте) и корректной оценки результатов ответов по данным вопросам,
              связанных с распознаванием изображений, вам необходимо
              использовать:
            </Text1>
            <Text1
              maxWidth={1026}
              mb={1}
              textColor={TextColor.Primary}
              level={TypographyLevel.Subtitle4}
            >
              - Белый лист бумаги, без клеток, неразлинованный, размер не менее
              А5 (можно А4). Рисунок должен быть крупный, располагаться на всем
              размере листа или большей его части;
            </Text1>
            <Text1
              maxWidth={1026}
              mb={1}
              textColor={TextColor.Primary}
              level={TypographyLevel.Subtitle4}
            >
              - Ручку черного цвета(ручка иных цветов или карандаш не будут
              распознаны системой);
            </Text1>
            <Text1 maxWidth={1026} mb={1} textColor={TextColor.Primary}>
              Вы также можете отредактировать фотографию рисунка и сделать ее
              черно-белой.
            </Text1>
            <Text1 maxWidth={1026} mb={1} textColor={TextColor.Primary}>
              2. Фото рисунка необходимо сделать сверху. Освящение должно быть
              максимально ярким (дневное, под лампой, без тени от устройства).
            </Text1>
            <Text1 maxWidth={1026} mb={1} textColor={TextColor.Primary}>
              3. Фотография должна содержать ТОЛЬКО тестируемый рисунок. Если в
              фото кадр попали не относящиеся к рисунку элементы, рекомендуется
              обрезать изображение или сделать новый снимок.
            </Text1>
          </Box>
        </StyledTestBox>
      </Section>

      <Section flex centered borderBox pt={1} pb={10}>
        <StyledTestBox flex column>
          <StyledBox flex pb={10}>
            <Box>
              <StyleText1
                maxWidth={890}
                mt={2}
                mr={5}
                ml={0}
                textColor={TextColor.Primary}
                level={TypographyLevel.Subtitle3}
              >
                Для перехода между заданиями используйте кнопки:
              </StyleText1>
            </Box>
            <StyledButtonBox>
              <StyleArrowLeft />
              <ArrowRight />
            </StyledButtonBox>
          </StyledBox>
          <StyleButton
            type={ButtonType.Primary}
            width={310}
            level={TypographyLevel.Subtitle3}
          >
            все понятно. Начать!
          </StyleButton>
        </StyledTestBox>
      </Section>
    </Box>
  );
};

export default TestText;