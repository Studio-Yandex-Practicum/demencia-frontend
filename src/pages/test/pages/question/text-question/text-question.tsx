import {
  ErrorText,
  StyledBoxArrowLeft,
  StyledBoxArrowRight,
  StyledBoxInput,
  TextInputBox,
} from "./text-question-styles";
import { Box, Section } from "../../../../../ui/controls";
import StyledInput from "../../../../../components/input-field";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import QuestionHeader from "../components/question-header";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../../components/contexts";

const TextQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();
  const { setLastQuestionId } = useContext(AppContext);

  const [textAnswer, setTextAnswer] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(`${number}`)) {
      const localAnswer = localStorage.getItem(`${number}`);
      if (localAnswer) {
        setTextAnswer(localAnswer);
      }
    } else {
      setTextAnswer("");
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
      if (setLastQuestionId) {
        setLastQuestionId(`${number + 1}`);
      }
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

          <TextInputBox width="100%">
            <StyledInput onChange={handleChange} value={textAnswer} />
          </TextInputBox>

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
