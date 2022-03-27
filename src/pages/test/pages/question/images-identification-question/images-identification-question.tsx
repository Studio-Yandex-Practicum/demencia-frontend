import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledInput from "../../../../../components/input-field";
import { Box, Section } from "../../../../../ui/controls";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import QuestionHeader from "../components/question-header";
import { ScreenSize } from "../../../../../ui/types";
import { ErrorText } from "../date-question/date-question-styles";

import rhinoPic from "../../../../../images/rhino-pic.jpg";
import harpPic from "../../../../../images/harp-pic.jpg";

const StyledBox = styled(Box)`
  @media (max-width: ${ScreenSize.Medium}px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

const StyledBoxInput = styled(Box)`
  margin: 90px auto;
  width: 100%;

  @media (max-width: ${ScreenSize.Medium}px) {
    margin: 30px auto;
    flex-direction: column;
    order: -1;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;
`;

const ImagesIdentificationQuestion: React.FC<{ number: number }> = ({
  number,
}) => {
  const navigate = useNavigate();
  const [firstAnswer, setFirstAnswer] = useState("");
  const [secondAnswer, setSecondAnswer] = useState("");
  const [isErrorTextShow, setIsErrorTextShow] = useState(false);

  useEffect(() => {
    const answer = localStorage.getItem(`${number}`);
    if (answer) {
      const [first, second] = answer.split(",");
      setFirstAnswer(first);
      setSecondAnswer(second);
    }
  }, [number]);

  const onBack = () => {
    if (number > 1) {
      navigate(`/test/question/${number - 1}`);
    }
  };

  const onForward = () => {
    if (firstAnswer && secondAnswer) {
      setIsErrorTextShow(false);

      const answer = `${firstAnswer},${secondAnswer}`;

      localStorage.setItem(`${number}`, answer);

      navigate(`/test/question/${number + 1}`);
    } else {
      setIsErrorTextShow(true);
    }
  };

  return (
    <Box>
      <QuestionHeader number={number} />

      <Section flex>
        <StyledBox flex maxWidth={1920} alignItems={"center"} width={"100%"}>
          <ArrowLeft onClick={() => onBack()} />
          <StyledBoxInput flex maxWidth={1920} alignItems={"center"}>
            <Box flex maxWidth={300} width={"100%"}>
              <StyledImg src={rhinoPic} />
            </Box>
            <StyledInput
              type="text"
              name="firstImageIdentInput"
              required
              value={firstAnswer}
              onChange={(e) => setFirstAnswer(e.target.value)}
            />
            <Box flex maxWidth={300} width={"100%"}>
              <StyledImg src={harpPic} />
            </Box>
            <StyledInput
              type="text"
              name="secondImageIdentInput"
              required
              value={secondAnswer}
              onChange={(e) => setSecondAnswer(e.target.value)}
            />
          </StyledBoxInput>
          <ArrowRight onClick={() => onForward()} />
        </StyledBox>
        {isErrorTextShow && (
          <ErrorText>
            Необходимо ответить на вопрос, прежде, чем переходить к следующему
          </ErrorText>
        )}
      </Section>
    </Box>
  );
};

export default ImagesIdentificationQuestion;
