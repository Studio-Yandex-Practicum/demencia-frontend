import {
  ErrorText,
  StyledBoxArrowLeft,
  StyledBoxArrowRight,
  StyledBoxInput,
} from "./text-question-styles";
import { Box, Section } from "../../../../../ui/controls";
import StyledInput from "../../../../../components/input-field";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import QuestionHeader from "../components/question-header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TextQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();

  const [textAnswer, setTextAnswer] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(`${number}`)) {
      const localAnswer = localStorage.getItem(`${number}`);
      if (localAnswer) {
        setTextAnswer(localAnswer);
      }
    }
  }, [number]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextAnswer(e.target.value);
  };

  const onBack = () => {
    if (number > 1) {
      navigate(`/test/question/${number - 1}`);
    }
  };

  const onForward = () => {
    if (textAnswer) {
      setIsError(false);
      localStorage.setItem(`${number}`, textAnswer);
      const to =
        number === 25 ? "/test/result" : `/test/question/${number + 1}`;
      navigate(to);
    } else setIsError(true);
  };

  return (
    <Box>
      <QuestionHeader number={number} />

      <Section centered flex>
        <StyledBoxInput flex maxWidth={1900}>
          <StyledBoxArrowLeft>
            <ArrowLeft onClick={onBack} />
          </StyledBoxArrowLeft>

          <Box mb={4}>
            <StyledInput onChange={handleChange} value={textAnswer} />
          </Box>

          <StyledBoxArrowRight>
            <ArrowRight onClick={onForward} />
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

export default TextQuestion;
