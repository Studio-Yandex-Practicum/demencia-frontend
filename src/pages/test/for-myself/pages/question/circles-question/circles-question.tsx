/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled from "styled-components";
import {
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Section,
  Text1,
  Text3,
} from "../../../../../../ui/controls";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import QuestionHeader from "../../../../pages/question/question-header";
import { ScreenSize, TextColor } from "../../../../../../ui/types";

import circleQuestionSamplePic from "../../../../../../images/circle-question-sample-pic.jpg";
import { AppContext } from "../../../../../../components/contexts";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import ErrorText from "../components/error-text";
import LoadingText from "../components/loading-text";
import { answerQuery } from "../../../../../../utils";

const StyledBox = styled(Box)`
  margin-bottom: 30px;

  @media (max-width: ${ScreenSize.Medium}px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    order: -1;
  }

  @media (max-width: ${ScreenSize.MediumSmall}px) {
    margin-bottom: 20px;
  }
`;

const StyledButton = styled(Button)`
  height: max-content;
  align-self: center;
  margin: 0 20px;
  @media (max-width: ${ScreenSize.Medium}px) {
    padding: 17px 20px;
  }
`;

const StyledArrowLeft = styled(ArrowLeft)`
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 40px;
  }

  @media (max-width: ${ScreenSize.MediumSmall}px) {
    margin-top: 20px;
  }
`;

const StyledArrowRight = styled(ArrowRight)`
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 40px;
  }

  @media (max-width: ${ScreenSize.MediumSmall}px) {
    margin-top: 20px;
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

// Область с кругами
const StyledQuestionSVG = styled.svg.attrs({
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
})`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  g {
    cursor: pointer;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    margin: 30px 0px;
  }
`;

//Компонент круг
const StyledCircle = styled.circle<{
  isClicked?: boolean;
}>`
  fill: ${({ isClicked }) => (isClicked ? "#5e0b77" : "rgb(102, 102, 102)")};
  ${({ isClicked }) => (isClicked ? "pointer-events: none;" : "")}
`;

// Компонент текст в круге
const StyledCircleText = styled.text<{
  isClicked?: boolean;
}>`
  user-select: none;
  fill: white;
  font-size: 40px;
  ${({ isClicked }) => (isClicked ? "pointer-events: none;" : "")}
`;

// Пропсы круга
interface SvgCircleProps {
  cx: number;
  cy: number;
  r?: number;
  circleText?: string;
  addPoint: (cx: number, cy: number) => void;
  isReset: boolean;
  setReset: Dispatch<SetStateAction<boolean>>;
  setAnswer: Dispatch<SetStateAction<string>>;
}

// Компонент объединяющий круг и текст
const SvgCircle: React.FC<SvgCircleProps> = ({
  cx,
  cy,
  r,
  circleText,
  addPoint,
  isReset,
  setReset,
  setAnswer,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    setIsClicked(false);
    setReset(false);
    setAnswer("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReset]);
  return (
    <g
      onClick={() => {
        setIsClicked(true);
        addPoint(cx, cy);
        setAnswer((prev) => prev + circleText);
      }}
    >
      <StyledCircle cx={cx} cy={cy} r={r} isClicked={isClicked} />
      <StyledCircleText
        x={circleText === "Д" ? cx - 15 : cx - 12}
        y={circleText === "Д" ? cy + 12 : cy + 13}
        isClicked={isClicked}
      >
        {circleText}
      </StyledCircleText>
    </g>
  );
};

// Компонент вопрос №23
const CirclesQuestion: React.FC<{ number: number }> = ({ number }) => {
  const [createAnswer, { loading }] = useMutation(answerQuery());
  const { setLastQuestionId } = useContext(AppContext);
  const navigate = useNavigate();
  const [points, setPoints] = useState<[{ x?: number; y?: number }?]>([]); // Стейт точек линии соединящей кружки
  const [circlesReset, setCirclesReset] = useState(false); // Сброс нажатых кружков
  const [answer, setAnswer] = useState(""); // Стейт строки ответа
  const [isErrorTextShow, setIsErrorTextShow] = useState(false);

  // Функция добавления точек для построения линии их соединяющей
  function addPoint(cx: number, cy: number) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setPoints((prev) => [...prev, { x: cx, y: cy }]);
  }

  const onBack = () => {
    if (number > 1) {
      navigate(`/test/question/${number - 1}`);
    }
  };

  const onForward = () => {
    const to = number === 25 ? "/test/result" : `/test/question/${number + 1}`;

    const isAnswered = localStorage.getItem(`${number}`);
    if (isAnswered && answer.length === 0) {
      navigate(to);
      return;
    }
    if (answer.length === 12) {
      setIsErrorTextShow(false);

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
          Соедините круги линией, начиная с цифры 1, чередуя затем цифры и
          буквы, и завершите на букве Е (1 – А – 2 – Б и т.д.).
        </StyledQuestionSampleText>
        <StyledImg src={circleQuestionSamplePic} />
      </StyledQuestionSampleBox>

      <Section flex>
        <StyledBox flex between width="100%">
          <StyledArrowLeft onClick={() => onBack()} />
          <StyledBox width="100%" flex>
            <StyledQuestionSVG
              id="circle"
              x="0px"
              y="0px"
              viewBox="0 0 800 400"
            >
              {points.map((item, i, array) =>
                array.length > 0 ? (
                  <line
                    key={i}
                    x1={item!.x}
                    y1={item!.y}
                    x2={array[i + 1] ? array[i + 1]!.x : item!.x}
                    y2={array[i + 1] ? array[i + 1]!.y : item!.y}
                    stroke="#5e0b77"
                    strokeWidth="10"
                  />
                ) : (
                  ""
                )
              )}
              <SvgCircle
                cx={40}
                cy={40}
                r={30}
                circleText={"1"}
                addPoint={addPoint}
                isReset={circlesReset}
                setReset={setCirclesReset}
                setAnswer={setAnswer}
              />
              <SvgCircle
                cx={200}
                cy={70}
                r={30}
                circleText={"А"}
                addPoint={addPoint}
                isReset={circlesReset}
                setReset={setCirclesReset}
                setAnswer={setAnswer}
              />
              <SvgCircle
                cx={50}
                cy={160}
                r={30}
                circleText={"2"}
                addPoint={addPoint}
                isReset={circlesReset}
                setReset={setCirclesReset}
                setAnswer={setAnswer}
              />
              <SvgCircle
                cx={90}
                cy={270}
                r={30}
                circleText={"Б"}
                addPoint={addPoint}
                isReset={circlesReset}
                setReset={setCirclesReset}
                setAnswer={setAnswer}
              />
              <SvgCircle
                cx={200}
                cy={350}
                r={30}
                circleText={"3"}
                addPoint={addPoint}
                isReset={circlesReset}
                setReset={setCirclesReset}
                setAnswer={setAnswer}
              />
              <SvgCircle
                cx={250}
                cy={220}
                r={30}
                circleText={"В"}
                addPoint={addPoint}
                isReset={circlesReset}
                setReset={setCirclesReset}
                setAnswer={setAnswer}
              />
              <SvgCircle
                cx={400}
                cy={100}
                r={30}
                circleText={"4"}
                addPoint={addPoint}
                isReset={circlesReset}
                setReset={setCirclesReset}
                setAnswer={setAnswer}
              />
              <SvgCircle
                cx={450}
                cy={300}
                r={30}
                circleText={"Г"}
                addPoint={addPoint}
                isReset={circlesReset}
                setReset={setCirclesReset}
                setAnswer={setAnswer}
              />
              <SvgCircle
                cx={550}
                cy={130}
                r={30}
                circleText={"5"}
                addPoint={addPoint}
                isReset={circlesReset}
                setReset={setCirclesReset}
                setAnswer={setAnswer}
              />
              <SvgCircle
                cx={750}
                cy={50}
                r={30}
                circleText={"Д"}
                addPoint={addPoint}
                isReset={circlesReset}
                setReset={setCirclesReset}
                setAnswer={setAnswer}
              />
              <SvgCircle
                cx={650}
                cy={200}
                r={30}
                circleText={"6"}
                addPoint={addPoint}
                isReset={circlesReset}
                setReset={setCirclesReset}
                setAnswer={setAnswer}
              />
              <SvgCircle
                cx={740}
                cy={300}
                r={30}
                circleText={"Е"}
                addPoint={addPoint}
                isReset={circlesReset}
                setReset={setCirclesReset}
                setAnswer={setAnswer}
              />
            </StyledQuestionSVG>
            <StyledButton
              zoomOnHover
              zoomOutOnHover={false}
              onClick={() => {
                setPoints([]);
                setCirclesReset(true);
              }}
            >
              <Text3 textColor={TextColor.Secondary} uppercase>
                Я ошибся (-лась). Начать снова
              </Text3>
            </StyledButton>
          </StyledBox>
          <StyledArrowRight onClick={() => onForward()} />
        </StyledBox>
        {isErrorTextShow && (
          <ErrorText>
            Необходимо завершить цепочку, прежде чем переходить к следующему
            вопросу
          </ErrorText>
        )}
        {loading && <LoadingText>Отправка ответа...</LoadingText>}
      </Section>
    </Box>
  );
};

export default CirclesQuestion;
