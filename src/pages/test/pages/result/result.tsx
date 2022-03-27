import React from "react";
import { Section } from "../../../../ui/controls";
import { Box, Button } from "../../../../ui/controls";
import {
  ButtonType,
  TextColor,
  TypographyLevel,
  ScreenSize,
} from "../../../../ui/types";
import { Subtitle3, Text1, Text4 } from "../../../../ui/controls";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ResultPage: React.FC = () => {
  const StyledTestBox = styled(Box)`
    text-align: left;
    max-width: 1026px;
  `;

  const StyleButton = styled(Button)`
    margin: 80px 0 80px;
    @media (max-width: ${ScreenSize.XSmall}px) {
      width: 200px;
      font-size: 14px;
      margin: 50px auto 50px;
    }
  `;

  const StyledBox = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    @media (max-width: ${ScreenSize.XSmall}px) {
      justify-content: center;
      gap: 30px;
    }
  `;

  const StyledTextBox = styled(Box)`
    border: solid 1px #000;
    border-radius: 50px;
    padding: 15px 35px;
    @media (max-width: ${ScreenSize.XSmall}px) {
      padding: 4px 15px;
    }
  `;

  const StyleSubtitle1 = styled(Subtitle3)`
    font-size: 40px;
    padding-bottom: 80px;
    color: black;
    @media (max-width: ${ScreenSize.Medium}px) {
      margin: 70px 0 40px;
      padding: 0;
    }
    @media (max-width: ${ScreenSize.XSmall}px) {
      text-align: center;
      font-size: 20px;
    }
  `;

  const StyleSubtitle3 = styled(Subtitle3)`
    font-size: 33px;
    @media (max-width: ${ScreenSize.XSmall}px) {
      font-size: 15px;
    }
  `;

  const StyleText1 = styled(Text1)`
    font-size: 33px;
    @media (max-width: ${ScreenSize.Medium}px) {
      margin: 20px auto 0;
      padding: 0;
    }
    @media (max-width: ${ScreenSize.XSmall}px) {
      font-size: 14px;
    }
  `;

  const StyleText4 = styled(Text4)`
    font-size: 12px;
    @media (max-width: ${ScreenSize.XSmall}px) {
      font-size: 9px;
    }
  `;

  const navigate = useNavigate();

  return (
    <Box>
      <Section flex centered borderBox>
        <StyledTestBox flex column>
          <StyleSubtitle1
            maxWidth={1026}
            uppercase={false}
            level={TypographyLevel.Subtitle1}
          >
            Благодарим за прохождение тестирования!
          </StyleSubtitle1>
          <StyledBox>
            <StyleSubtitle3 maxWidth={1026} textColor={TextColor.Accent1}>
              ВАШ РЕЗУЛЬТАТ:
            </StyleSubtitle3>
            <StyledTextBox>
              <StyleSubtitle3
                maxWidth={1026}
                textColor={TextColor.Accent1}
                uppercase={false}
              >
                16 баллов
              </StyleSubtitle3>
            </StyledTextBox>
          </StyledBox>
          <StyleText1 pt={9} level={TypographyLevel.Subtitle4}>
            Максимальное количество баллов 22.
          </StyleText1>
          <StyleText4 pt={7}>
            Более подробные результаты и полезные информационные материалы были
            высланы на вашу электронную почту*
          </StyleText4>
          <StyleText4>
            *Если вы не получили данное письмо, проверьте папку “Спам”
          </StyleText4>
          <StyleButton
            type={ButtonType.Primary}
            width={310}
            level={TypographyLevel.Subtitle3}
            onClick={() => navigate("/test/question/1")}
          >
            Пройти еще раз
          </StyleButton>
        </StyledTestBox>
      </Section>
    </Box>
  );
};

export default ResultPage;
