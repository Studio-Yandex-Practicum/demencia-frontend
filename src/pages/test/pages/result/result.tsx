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
import { useQuery } from "@apollo/client";
import { toast } from "react-hot-toast";
import { TestResult } from "../../../../types/testResult";
import { GET_TEST_RESULT } from "../../../../gql/query/testResult";

const Empty: React.FC = () => (
  <Section borderBox flex centered>
    <Subtitle3>Не удалось получить результаты теста</Subtitle3>
  </Section>
);

const ResultPage: React.FC = () => {
  const StyledTestBox = styled(Box)`
    text-align: left;
    max-width: 1026px;
  `;

  const StyleButton = styled(Button)`
    margin: 80px 0 80px 16px;
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
    @media (max-width: ${ScreenSize.XSmall}px) {
      margin: 20px auto 0;
      font-size: 14px;
      padding: 0;
    }
  `;

  const StyleText4 = styled(Text4)`
    font-size: 12px;
    @media (max-width: ${ScreenSize.XSmall}px) {
      font-size: 9px;
    }
  `;

  const navigate = useNavigate();

  const id = JSON.parse(localStorage.getItem("test_id") || "");

  const { data, loading, error } = useQuery<TestResult>(GET_TEST_RESULT, {
    variables: { id },
  });

  if (loading) {
    return (
      <Section flex centered>
        <Subtitle3>Загрузка результатов теста...</Subtitle3>
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

  const result = data.testResult;

  const changeEndOfWord = (answer: number) => {
    if (answer === 1 || answer === 21) {
      return "балл";
    } else if ((answer > 1 && answer < 5) || (answer > 21 && answer < 25)) {
      return "баллa";
    } else {
      return "баллов";
    }
  };

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
                {`${result} ${changeEndOfWord(Number(result))}`}
              </StyleSubtitle3>
            </StyledTextBox>
          </StyledBox>
          <StyleText1 pt={9} level={TypographyLevel.Subtitle4}>
            Максимальное количество баллов 22.
          </StyleText1>
          <StyleText4 pt={7}>
            Более подробные результаты и полезные информационные материалы были
            высланы на вашу электронную почту*.
          </StyleText4>
          <StyleText4>
            *Если вы не получили данное письмо, проверьте папку “Спам”.
          </StyleText4>
          <StyleButton
            type={ButtonType.Primary}
            width={310}
            level={TypographyLevel.Subtitle3}
            zoomOnHover
            zoomOutOnHover={false}
            onClick={() => {
              navigate("/test/start");
              localStorage.clear();
            }}
          >
            Пройти еще раз
          </StyleButton>
        </StyledTestBox>
      </Section>
    </Box>
  );
};

export default ResultPage;
