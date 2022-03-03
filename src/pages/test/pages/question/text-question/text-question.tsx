import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Box, Section } from "../../../../../ui/controls";
import StyledInput from "../../../../../components/input-field";
import { ArrowLeft, ArrowRight } from "./decor";
import QuestionText from "../questionText";

const StyledBoxInput = styled(Box)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 90px auto;
  width: 100%;
`;

const StyleArrowLeft = styled(ArrowLeft)`
  margin-right: 20px;
`;

const StyleArrowRight = styled(ArrowRight)`
  margin-left: 20px;
`;

const TextQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <QuestionText number={number} />

      <Section flex>
        <StyledBoxInput flex maxWidth={1900}>
          <StyleArrowLeft
            onClick={() => navigate(`/test/question/${number - 1}`)}
          />
          <StyledInput />
          <StyleArrowRight
            onClick={() => navigate(`/test/question/${number + 1}`)}
          />
        </StyledBoxInput>
      </Section>
    </Box>
  );
};

export default TextQuestion;
