import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import StyledInput from "../../../../../../components/input-field";
import { Box, Section } from "../../../../../../ui/controls";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import QuestionHeader from "../../../../pages/question/question-header";
import { ScreenSize } from "../../../../../../ui/types";

import rhinoPic from "../../../../../../images/rhino-pic.jpg";
import harpPic from "../../../../../../images/harp-pic.jpg";
import { AppContext } from "../../../../../../components/contexts";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import ErrorText from "../components/error-text";
import LoadingText from "../components/loading-text";
import { answerQuery } from "../../../../../../utils";

const StyledBox = styled(Box)`
  @media (max-width: ${ScreenSize.Medium}px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  margin-bottom: 40px;

  @media (max-width: ${ScreenSize.MediumSmall}px) {
    margin-bottom: 20px;
  }
`;

const StyledBoxInput = styled(Box)`
  margin: 0 auto;
  width: 100%;

  @media (max-width: ${ScreenSize.Medium}px) {
    flex-direction: column;
    order: -1;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  object-fit: contain;
  object-position: center;
`;

const StyledArrowLeft = styled(ArrowLeft)`
  @media (max-width: ${ScreenSize.Medium}px) {
    margin-top: 40px;
  }
`;

const StyledArrowRight = styled(ArrowRight)`
  @media (max-width: ${ScreenSize.Medium}px) {
    margin-top: 40px;
  }
`;

const ImagesIdentificationQuestion: React.FC<{ number: number }> = ({
  number,
}) => {
  const [createAnswer, { loading }] = useMutation(answerQuery());
  const { setLastQuestionId } = useContext(AppContext);
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
    } else {
      setFirstAnswer("");
      setSecondAnswer("");
    }
  }, [number]);

  const onBack = () => {
    if (number > 1) {
      navigate(`/test/question/${number - 1}`);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: (value: string) => void
  ) => {
    setState(e.target.value.replace(/[^а-яёa-z0-9\s]/gi, ""));
  };

  const onForward = () => {
    if (firstAnswer.trim().length !== 0 && secondAnswer.trim().length !== 0) {
      setIsErrorTextShow(false);

      const answer = `${firstAnswer},${secondAnswer}`;

      localStorage.setItem(`${number}`, answer);

      const testId = JSON.parse(localStorage.getItem("test_id") || "");
      createAnswer({
        variables: {
          input: {
            answerValue: answer,
            testCase: { id: testId },
            question: number,
          },
        },
      })
        .then((res) => {
          if (res.data.createAnswer.ok === true) {
            localStorage.setItem(`${number}`, answer);
            if (setLastQuestionId) {
              setLastQuestionId(`${number + 1}`);
            }
            const to =
              number === 25 ? "/test/result" : `/test/question/${number + 1}`;
            navigate(to);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(`Ошибка сервера`);
        });
    } else {
      setIsErrorTextShow(true);
    }
  };

  return (
    <Box>
      <QuestionHeader number={number} />

      <Section flex mt={3}>
        <StyledBox flex maxWidth={1920} alignItems={"center"} width={"100%"}>
          <StyledArrowLeft onClick={() => onBack()} />
          <StyledBoxInput flex maxWidth={1920} alignItems={"center"}>
            <Box flex maxWidth={300} width={"100%"}>
              <StyledImg src={rhinoPic} />
            </Box>
            <StyledInput
              type="text"
              name="firstImageIdentInput"
              required
              value={firstAnswer}
              maxLength={100}
              onChange={(e) => handleChange(e, setFirstAnswer)}
            />
            <Box flex maxWidth={300} width={"100%"}>
              <StyledImg src={harpPic} />
            </Box>
            <StyledInput
              type="text"
              name="secondImageIdentInput"
              required
              value={secondAnswer}
              maxLength={100}
              onChange={(e) => handleChange(e, setSecondAnswer)}
            />
          </StyledBoxInput>
          <StyledArrowRight onClick={() => onForward()} />
        </StyledBox>
        {isErrorTextShow && (
          <ErrorText>
            Необходимо ответить на вопрос, прежде чем переходить к следующему
          </ErrorText>
        )}
        {loading && <LoadingText>Отправка ответа...</LoadingText>}
      </Section>
    </Box>
  );
};

export default ImagesIdentificationQuestion;
