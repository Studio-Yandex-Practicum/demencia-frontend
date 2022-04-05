import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../../components/contexts";
import { Box } from "../../../../../ui/controls";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import QuestionHeader from "../components/question-header";
import {
  ErrorText,
  StyledBox,
  StyledBoxArrowLeft,
  StyledBoxArrowRight,
  StyledButton,
  StyledSection,
} from "./memory-test-question-styles";

const MemoryTestQuestion: React.FC<{ number: number }> = ({ number }) => {
  const { setLastQuestionId } = useContext(AppContext);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const onPressButton = () => {
    setIsError(false);
    localStorage.setItem(`${number}`, "true");
    if (setLastQuestionId) {
      setLastQuestionId(`${number + 1}`);
    }
    navigate(`/test/question/${number + 1}`);
  };

  const goForward = () => {
    if (localStorage.getItem(`${number}`)) {
      if (setLastQuestionId) {
        setLastQuestionId(`${number + 1}`);
      }
      navigate(`/test/question/${number + 1}`);
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <Box>
        <QuestionHeader number={number} />

        <StyledSection centered flex>
          <StyledBoxArrowLeft>
            <ArrowLeft
              onClick={() => navigate(`/test/question/${number - 1}`)}
            />
          </StyledBoxArrowLeft>

          <StyledBox>
            <StyledButton onClick={onPressButton}>ПОНЯТНО. ДАЛЕЕ</StyledButton>
          </StyledBox>

          <StyledBoxArrowRight>
            <ArrowRight onClick={goForward} />
          </StyledBoxArrowRight>
        </StyledSection>
        {isError && (
          <ErrorText>
            Необходимо ответить на вопрос, прежде, чем переходить к следующему
          </ErrorText>
        )}
      </Box>
    </>
  );
};

export default MemoryTestQuestion;
