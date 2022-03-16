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

const ImagesIdentificationQuestion: React.FC<{
  number: number;
  testAnswers?: { [key: string]: { [key: string]: string } };
  setTestAnswers?: any;
}> = ({ number, testAnswers, setTestAnswers }) => {
  const navigate = useNavigate();

  const {
    values: imageIdentAnswers,
    handleChange,
    setValues: setImageIdentAnswers,
    errors,
  } = useForm();

  const [isErrorTextShow, setIsErrorTextShow] = useState(false);

  useEffect(() => {
    if (testAnswers && testAnswers.imageIdentAnswers) {
      if (testAnswers.imageIdentAnswers.firstImageIdentInput) {
        setImageIdentAnswers((prevState) => ({
          ...prevState,
          firstImageIdentInput:
            testAnswers.imageIdentAnswers.firstImageIdentInput,
        }));
      }

      if (testAnswers.imageIdentAnswers.secondImageIdentInput) {
        setImageIdentAnswers((prevState) => ({
          ...prevState,
          secondImageIdentInput:
            testAnswers.imageIdentAnswers.secondImageIdentInput,
        }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBack = () => {
    if (number > 1) {
      navigate(`/test/question/${number - 1}`);
    }
  };

  const onForward = () => {
    console.log(errors);
    if (
      imageIdentAnswers.firstImageIdentInput &&
      imageIdentAnswers.secondImageIdentInput
    ) {
      setIsErrorTextShow(false);
      setTestAnswers({ ...testAnswers, imageIdentAnswers });
      const to =
        number === 25 ? "/test/result" : `/test/question/${number + 1}`;
      navigate(to);
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
