import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Box, Section } from "../../../../../ui/controls";
import StyledInput from "../../../../../components/input-field";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import QuestionHeader from "../components/question-header";

const StyledBoxInput = styled(Box)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 90px auto;
  width: 100%;
`;

const TextQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();

  const onBack = () => {
    if (number > 1) {
      navigate(`/test/question/${number - 1}`);
    }
  };

  const onForward = () => {
    const to = number === 25 ? "/test/result" : `/test/question/${number + 1}`;
    navigate(to);
  };

  return (
    <Box>
      <QuestionHeader number={number} />

      <Section flex>
        <StyledBoxInput flex maxWidth={1900}>
          <ArrowLeft onClick={() => onBack()} />
          <StyledInput />
          <ArrowRight onClick={() => onForward()} />
        </StyledBoxInput>
      </Section>
    </Box>
  );
};

export default TextQuestion;
