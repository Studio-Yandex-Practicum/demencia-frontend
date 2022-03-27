import { useState, useEffect } from "react";
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
} from "./money-question-styles";
import { ArrowLeft, ArrowRight } from "../components/arrows";

const MoneyQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();
  const [firstAnswer, setFirstAnswer] = useState("");
  const [secondAnswer, setSecondAnswer] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChangeFirstQuestion = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const str = e.target.value;
    if (str) {
      setFirstAnswer(str);
    }
  };

  const handleChangeSecondQuestion = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const str = e.target.value;
    if (str) {
      setSecondAnswer(str);
    }
  };

  useEffect(() => {
    if (localStorage.getItem(`${number}`)) {
      const localStorageDate = localStorage.getItem(`${number}`)?.split("-");
      if (localStorageDate) {
        const modifiedLocalStorageDate = localStorageDate?.map((item) => {
          if (item.startsWith("0")) {
            return item.slice(1);
          }
          return item;
        });

        setFirstAnswer(modifiedLocalStorageDate[0]);
        setSecondAnswer(modifiedLocalStorageDate[1]);
      }
    }
  }, [number]);

  const makeAnswer = () => {
    return `${firstAnswer},${secondAnswer}`;
  };

  const goForward = () => {
    if (firstAnswer || secondAnswer) {
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
          <StyledBoxSelect flex width="100%">
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
