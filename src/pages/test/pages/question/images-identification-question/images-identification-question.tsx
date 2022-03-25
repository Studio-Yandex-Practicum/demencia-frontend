import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledInput from "../../../../../components/input-field";
import { Box, Section } from "../../../../../ui/controls";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import QuestionHeader from "../components/question-header";
import { ScreenSize } from "../../../../../ui/types";
import { useForm } from "../../../../../hooks/useForm";
import { ErrorText } from "../date-question/date-question-styles";

import rhinoPic from "../../../../../images/rhino-pic.jpg";
import harpPic from "../../../../../images/harp-pic.jpg";
import useLocalStorage from "../../../../../hooks/useLocalStorage";

const StyledBoxInput = styled(Box)`
  margin: 90px auto;
  width: 100%;

  @media (max-width: ${ScreenSize.Medium}px) {
    flex-direction: column;
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
  const [answer15, setAnswer15] = useLocalStorage(number.toString());

  const {
    values: imageIdentAnswers,
    handleChange,
    setValues: setImageIdentAnswers,
  } = useForm();

  const [isErrorTextShow, setIsErrorTextShow] = useState(false);

  useEffect(() => {
    if (answer15) {
      setImageIdentAnswers((prevState) => ({
        ...prevState,
        firstImageIdentInput: answer15.split(",")[0],
        secondImageIdentInput: answer15.split(",")[1],
      }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBack = () => {
    if (number > 1) {
      navigate(`/test/question/${number - 1}`);
    }
  };

  const onForward = () => {
    if (
      imageIdentAnswers.firstImageIdentInput &&
      imageIdentAnswers.secondImageIdentInput
    ) {
      setIsErrorTextShow(false);
      setAnswer15(
        `${imageIdentAnswers.firstImageIdentInput},${imageIdentAnswers.secondImageIdentInput}`
      );
      const to =
        number === 25 ? "/test/result" : `/test/question/${number + 1}`;
      // Используем setTimeout, чтобы переместить выполнение navigate(to) после setAnswers15
      setTimeout(() => {
        navigate(to);
      }, 0);
    } else {
      setIsErrorTextShow(true);
    }
  };

  return (
    <Box>
      <QuestionHeader number={number} />

      <Section flex>
        <Box flex maxWidth={1920} alignItems={"center"} width={"100%"}>
          <ArrowLeft onClick={() => onBack()} />
          <StyledBoxInput flex maxWidth={1920} alignItems={"center"}>
            <Box flex maxWidth={300} width={"100%"}>
              <StyledImg src={rhinoPic} />
            </Box>
            <StyledInput
              type="text"
              name="firstImageIdentInput"
              required
              value={imageIdentAnswers.firstImageIdentInput || ""}
              onChange={handleChange}
            />
            <Box flex maxWidth={300} width={"100%"}>
              <StyledImg src={harpPic} />
            </Box>
            <StyledInput
              type="text"
              name="secondImageIdentInput"
              required
              value={imageIdentAnswers.secondImageIdentInput || ""}
              onChange={handleChange}
            />
          </StyledBoxInput>
          <ArrowRight onClick={() => onForward()} />
        </Box>
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
