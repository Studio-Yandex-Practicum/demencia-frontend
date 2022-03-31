import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Section } from "../../../../../ui/controls";
import { TextColor, TypographyLevel } from "../../../../../ui/types";
import { testData } from "../../../data";
import QuestionHeader from "../components/question-header";
import QuestionTextUnfolding from "../components/question-text-unfolding";
import {
  StyledBox,
  StyleBoxInputs,
  StyledBoxArrowRight,
  StyledBoxArrowLeft,
  StyledArrowLeft,
  StyledArrowRight,
  StyledText1,
  ErrorText,
  StyledInput,
  StyledLabel,
  StyledBoxInput,
} from "./clock-image-question-style";

const ClockImageQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();
  const [isFail, setIsFail] = useState("");
  const [isError, setIsError] = useState(false);
  const [buttonText, setButtonText] = useState("Добавить файл");

  useEffect(() => {
    const answer = localStorage.getItem(`${number}`);
    if (answer) {
      const newData = localStorage.getItem(`${number}`);
      if (newData) {
        setButtonText("Загрузка...");
        setIsFail(newData);
        setButtonText("Загружено");
      }
    } else {
      setIsFail("");
    }
  }, [number]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFail(e.target.value);
  };

  const onBack = () => {
    if (number > 1) {
      navigate(`/test/question/${number - 1}`);
    }
  };

  const goForward = () => {
    if (isFail) {
      setIsError(false);

      const answer = `${isFail}`;

      localStorage.setItem(`${number}`, answer);
      navigate(`/test/question/${number + 1}`);
    } else {
      setIsError(true);
    }
  };

  return (
    <Box>
      <QuestionHeader number={number} />
      <QuestionTextUnfolding />
      <Section flex>
        <StyledBox flex maxWidth={1900}>
          <StyledBoxArrowLeft>
            <StyledArrowLeft onClick={onBack} />
          </StyledBoxArrowLeft>
          <StyleBoxInputs>
            <StyledBoxInput>
              <StyledText1
                textColor={TextColor.Primary}
                level={TypographyLevel.Subtitle3}
              >
                Нарисуйте циферблат и разместите на нем цифры. Расположите
                стрелки так, чтобы часы показывали без десяти минут 14 часов.
              </StyledText1>
            </StyledBoxInput>
            <StyledBoxInput flex>
              <StyledLabel htmlFor="file_drawClock">{buttonText}</StyledLabel>
              <StyledInput
                id="file_drawClock"
                type="file"
                accept="image/jpeg"
                onChange={handleChange}
                value={isFail}
              />
            </StyledBoxInput>
          </StyleBoxInputs>
          <StyledBoxArrowRight>
            <StyledArrowRight onClick={goForward} />
          </StyledBoxArrowRight>
        </StyledBox>
        {isError && (
          <ErrorText>
            Необходимо ответить на вопрос, прежде, чем переходить к следующему
          </ErrorText>
        )}
      </Section>
    </Box>
  );
};

export default ClockImageQuestion;
