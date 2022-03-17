import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const goForward = () => {
    setIsError(false);
    localStorage.setItem(`${number}`, "true");
    navigate(`/test/question/${number + 1}`);
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
            <StyledButton onClick={goForward}>ПОНЯТНО. ДАЛЕЕ</StyledButton>
          </StyledBox>

          <StyledBoxArrowRight>
            <ArrowRight
              onClick={() => {
                if (localStorage.getItem(`${number}`)) {
                  navigate(`/test/question/${number + 1}`);
                } else {
                  setIsError(true);
                }
              }}
            />
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
