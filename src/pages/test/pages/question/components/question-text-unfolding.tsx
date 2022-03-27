import styled from "styled-components";
import { useState } from "react";
import { Box, Section, Text3, Text1, Button } from "../../../../../ui/controls";
import {
  ScreenSize,
  TextColor,
  TypographyLevel,
} from "../../../../../ui/types";
import { ArrowDown, ArrowTop } from "./arrows";

const StyledSection = styled(Section)`
  display: block;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    max-width: 600px;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  margin: 0 auto;
`;

const StuleButton = styled(Button)`
  margin: 0;
  padding: 0;
  width: 20px;
  background: none;
`;

const Styledtext1 = styled(Text1)`
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    font-size: 18px;
    line-height: 20px;
    margin: 16px 60px 0 20px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 16px;
    margin: 16px 40px 0 20px;
  }
`;

const StyleText3 = styled(Text3)`
  margin: 0 auto;
  @media (max-width: ${ScreenSize.Medium}px) {
    margin: 0 40px;
  }
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    font-size: 16px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin: 0 30px;
  }
`;

const QuestionTextUnfolding: React.FC = () => {
  const [checked, setChecked] = useState(true);

  return (
    <Box>
      <Section>
        <StyledBox maxWidth={920}>
          {checked ? (
            <StuleButton>
              <ArrowTop onClick={() => setChecked(false)} />
            </StuleButton>
          ) : (
            <StuleButton>
              <ArrowDown onClick={() => setChecked(true)} />
            </StuleButton>
          )}
          <Styledtext1
            maxWidth={860}
            textColor={TextColor.Primary}
            level={TypographyLevel.Subtitle3}
            mt={2}
            ml={2}
          >
            Для прохождения задания, пожалуйста, возьмите чистый лист бумаги
            (постарайтесь использовать нелинованный лист белого цвета).
          </Styledtext1>
        </StyledBox>
        {checked ? (
          <StyledSection>
            <StyleText3
              maxWidth={860}
              textColor={TextColor.Primary}
              level={TypographyLevel.Text1}
            >
              1. С помощью доступных электронных устройств сфотографируйте ваш
              рисунок.
            </StyleText3>
            <StyleText3
              maxWidth={860}
              textColor={TextColor.Primary}
              level={TypographyLevel.Text1}
            >
              2. Любым доступным способом перенесите фотографию на компьютер, с
              которого Вы проходите тестирование: перемещение с помощью USB
              накопителя. перемещение с помощью проводного подключения
              устройства.
            </StyleText3>
            <StyleText3
              maxWidth={860}
              textColor={TextColor.Primary}
              level={TypographyLevel.Text1}
            >
              3. Нажмите на кнопку «ДОБАВИТЬ ФАЙЛ» и выберите фотографию рисунка
              в перечне файлов на компьютере или в галерее снимков
              смартфона/планшета.
            </StyleText3>
          </StyledSection>
        ) : (
          ""
        )}
      </Section>
    </Box>
  );
};

export default QuestionTextUnfolding;
