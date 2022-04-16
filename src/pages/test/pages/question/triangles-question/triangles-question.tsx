import styled from "styled-components";
import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Section, Text1, Text3 } from "../../../../../ui/controls";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import QuestionHeader from "../components/question-header";
import { ErrorText } from "../date-question/date-question-styles";
import { ScreenSize, TextColor } from "../../../../../ui/types";

import triangleQuestionSamplePic from "../../../../../images/triangles-question-sample-pic.jpg";
import { AppContext } from "../../../../../components/contexts";
import { CREATE_ANSWER } from "../../../../../gql/mutation/create-answer";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";

const StyledBox = styled(Box)`
  @media (max-width: ${ScreenSize.Medium}px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    order: -1;
  }
`;

const StyledButton = styled(Button)`
  height: max-content;
  align-self: center;
  margin: 0 20px;
  @media (max-width: ${ScreenSize.Medium}px) {
    margin-bottom: 30px;
    padding: 17px 20px;
  }
`;

const StyledArrowLeft = styled(ArrowLeft)`
  @media (max-width: ${ScreenSize.Medium}px) {
    margin: 30px 0;
  }
`;

const StyledArrowRight = styled(ArrowRight)`
  @media (max-width: ${ScreenSize.Medium}px) {
    margin: 30px 0;
  }
`;

const StyledImg = styled.img`
  width: 100%;
  max-width: 300px;
  position: relative;
  top: -70px;
  object-fit: contain;
  object-position: center;

  @media (max-width: ${ScreenSize.Medium}px) {
    position: static;
    max-width: 400px;
  }
`;

const StyledQuestionSampleBox = styled(Box)`
  @media (max-width: ${ScreenSize.Medium}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledQuestionSampleText = styled(Text1)`
  @media (max-width: ${ScreenSize.Medium}px) {
    text-align: center;
  }
`;

// Область с линиями
const StyledQuestionSVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  @media (max-width: ${ScreenSize.Medium}px) {
    margin: 30px 0px;
  }
`;

//Стили для компонента линия
const StyledLine = styled.line<{
  isClicked?: boolean;
  isAnswered?: boolean;
}>`
  cursor: pointer;
  ${({ isClicked, isAnswered }) =>
    isClicked || isAnswered ? "pointer-events: none; cursor: default;" : ""}
  ${({ isClicked }) => (isClicked ? "display: none;" : "")}

  transition: all .2s linear;
  &:hover {
    stroke: red;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.7));
  }
`;

// Пропсы линии
interface SvgLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  lineNumber: number;
  isReset: boolean;
  setReset: Dispatch<SetStateAction<boolean>>;
  setAnswer: Dispatch<SetStateAction<number[]>>;
  answer: number[];
}

// Компонент линия
const SvgLine: React.FC<SvgLineProps> = ({
  x1,
  y1,
  x2,
  y2,
  isReset,
  setReset,
  setAnswer,
  answer,
  lineNumber,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    setIsClicked(false);
    setReset(false);
    setAnswer([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReset]);
  return (
    <StyledLine
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="#5e0b77"
      strokeWidth="20"
      onClick={() => {
        setIsClicked(true);
        setAnswer((prev) => prev.filter((item) => item !== lineNumber));
      }}
      isClicked={isClicked}
      isAnswered={answer.length < 8 ? true : false}
    />
  );
};

// Компонент вопрос №24
const TrianglesQuestion: React.FC<{ number: number }> = ({ number }) => {
  const [createAnswer] = useMutation(CREATE_ANSWER);
  const { setLastQuestionId } = useContext(AppContext);
  const navigate = useNavigate();
  const [isLinesReset, setIsLinesReset] = useState(false); // Сброс нажатых кружков
  const [answer, setAnswer] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]); // Стейт массива ответа
  const [isErrorTextShow, setIsErrorTextShow] = useState(false);

  const onBack = () => {
    if (number > 1) {
      navigate(`/test/question/${number - 1}`);
    }
  };

  const onForward = () => {
    const to = number === 25 ? "/test/result" : `/test/question/${number + 1}`;

    const isAnswered = localStorage.getItem(`${number}`);
    if (isAnswered && answer.length === 9) {
      navigate(to);
      return;
    }

    if (answer.length < 8) {
      setIsErrorTextShow(false);

      const finalAnswer = answer.join(",");

      const testId = JSON.parse(localStorage.getItem("test_id") || "");
      createAnswer({
        variables: {
          input: {
            answerValue: finalAnswer,
            testCase: { id: testId },
            question: number,
          },
        },
      })
        .then((res) => {
          if (res.data.createAnswer.ok === true) {
            localStorage.setItem(`${number}`, finalAnswer);
            if (setLastQuestionId) {
              setLastQuestionId(`${number + 1}`);
            }
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

      <StyledQuestionSampleBox flex gap={"30px"} relative>
        <StyledQuestionSampleText>
          На рисунке четыре треугольника. Удалите 2 линии так, чтобы осталось 3
          треугольника. Линий, не образующих фигуры, быть не должно. Чтобы
          убрать линию, кликните по ней.
        </StyledQuestionSampleText>
        <StyledImg src={triangleQuestionSamplePic} />
      </StyledQuestionSampleBox>

      <Section flex>
        <StyledBox flex between width="100%">
          <StyledArrowLeft onClick={() => onBack()} />
          <StyledBox width="100%" flex>
            <StyledQuestionSVG id="lines" x="0px" y="0px" viewBox="0 0 800 400">
              <SvgLine
                x1={20}
                y1={50}
                x2={300}
                y2={50}
                lineNumber={1}
                setAnswer={setAnswer}
                answer={answer}
                setReset={setIsLinesReset}
                isReset={isLinesReset}
              />
              <SvgLine
                x1={10}
                y1={67}
                x2={150}
                y2={310}
                lineNumber={2}
                setAnswer={setAnswer}
                answer={answer}
                setReset={setIsLinesReset}
                isReset={isLinesReset}
              />
              <SvgLine
                x1={310}
                y1={67}
                x2={170}
                y2={310}
                lineNumber={3}
                setAnswer={setAnswer}
                answer={answer}
                setReset={setIsLinesReset}
                isReset={isLinesReset}
              />
              <SvgLine
                x1={180}
                y1={327}
                x2={460}
                y2={327}
                lineNumber={4}
                setAnswer={setAnswer}
                answer={answer}
                setReset={setIsLinesReset}
                isReset={isLinesReset}
              />
              <SvgLine
                x1={340}
                y1={50}
                x2={620}
                y2={50}
                lineNumber={5}
                setAnswer={setAnswer}
                answer={answer}
                setReset={setIsLinesReset}
                isReset={isLinesReset}
              />
              <SvgLine
                x1={330}
                y1={67}
                x2={470}
                y2={310}
                lineNumber={6}
                setAnswer={setAnswer}
                answer={answer}
                setReset={setIsLinesReset}
                isReset={isLinesReset}
              />
              <SvgLine
                x1={630}
                y1={67}
                x2={490}
                y2={310}
                lineNumber={7}
                setAnswer={setAnswer}
                answer={answer}
                setReset={setIsLinesReset}
                isReset={isLinesReset}
              />
              <SvgLine
                x1={500}
                y1={327}
                x2={780}
                y2={327}
                lineNumber={8}
                setAnswer={setAnswer}
                answer={answer}
                setReset={setIsLinesReset}
                isReset={isLinesReset}
              />
              <SvgLine
                x1={650}
                y1={67}
                x2={790}
                y2={310}
                lineNumber={9}
                setAnswer={setAnswer}
                answer={answer}
                setReset={setIsLinesReset}
                isReset={isLinesReset}
              />
            </StyledQuestionSVG>
            <StyledButton
              onClick={() => {
                setIsLinesReset(true);
                setIsErrorTextShow(false);
              }}
            >
              <Text3 textColor={TextColor.Secondary} uppercase>
                Я ошибся/ошиблась. Начать снова
              </Text3>
            </StyledButton>
          </StyledBox>
          <StyledArrowRight onClick={() => onForward()} />
        </StyledBox>
        {isErrorTextShow && answer.length > 7 && (
          <ErrorText>
            Необходимо исключить лишние линии, прежде, чем переходить к
            следующему вопросу. Нужно исключить еще{" "}
            <strong>{-7 + answer.length}</strong> !
          </ErrorText>
        )}
      </Section>
    </Box>
  );
};

export default TrianglesQuestion;
