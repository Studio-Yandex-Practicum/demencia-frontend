import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Section } from "../../../../../ui/controls";
import QuestionHeader from "../components/question-header";
import {
  StyledBoxInput,
  StyleInput,
  StyledBoxArrowRight,
  StyledBoxArrowLeft,
  StyledBoxSelect,
  StyleLabel,
  ErrorText,
  InputBox,
} from "./money-question-styles";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import { AppContext } from "../../../../../components/contexts";

const MoneyQuestion: React.FC<{ number: number }> = ({ number }) => {
  const { setLastQuestionId } = useContext(AppContext);
  const navigate = useNavigate();
  const [firstAnswer, setFirstAnswer] = useState("");
  const [secondAnswer, setSecondAnswer] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChangeFirstQuestion = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstAnswer(e.target.value);
  };

  const handleChangeSecondQuestion = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSecondAnswer(e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem(`${number}`)) {
      const localStorageDate = localStorage.getItem(`${number}`)?.split(",");
      if (localStorageDate) {
        setFirstAnswer(localStorageDate[0]);
        setSecondAnswer(localStorageDate[1]);
      } else {
        setFirstAnswer("");
        setSecondAnswer("");
      }
    }
  }, [number]);

  const makeAnswer = () => {
    return `${firstAnswer},${secondAnswer}`;
  };

  const goForward = () => {
    if (firstAnswer && secondAnswer) {
      if (setLastQuestionId) {
        setLastQuestionId(`${number + 1}`);
      }
      setIsError(false);

      const answer = makeAnswer();

      localStorage.setItem(`${number}`, answer);

      navigate(`/test/question/${number + 1}`);
    } else {
      setIsError(true);
      navigate("");
    }
  };

  return (
    <Box>
      <QuestionHeader number={number} />
      <Section centered flex>
        <StyledBoxInput flex maxWidth={1900}>
          <StyledBoxArrowLeft>
            <ArrowLeft
              onClick={() => navigate(`/test/question/${number - 1}`)}
            />
          </StyledBoxArrowLeft>
          <StyledBoxSelect flex maxWidth={1200}>
            <InputBox>
              <StyleInput
                type="number"
                min="0"
                max="99"
                step="1"
                defaultValue={firstAnswer}
                onChange={handleChangeFirstQuestion}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <StyleLabel>рублей</StyleLabel>
            </InputBox>
            <InputBox>
              <StyleInput
                type="number"
                min="0"
                max="99"
                step="1"
                defaultValue={secondAnswer}
                onChange={handleChangeSecondQuestion}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <StyleLabel>копеек</StyleLabel>
            </InputBox>
          </StyledBoxSelect>
          <StyledBoxArrowRight>
            <ArrowRight onClick={goForward} />
          </StyledBoxArrowRight>
        </StyledBoxInput>
        {isError && (
          <ErrorText>
            Необходимо ответить на вопрос, прежде, чем переходить к следующему
          </ErrorText>
        )}
      </Section>
    </Box>
  );
};

export default MoneyQuestion;
