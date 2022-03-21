import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Box, Section, Text1 } from "../../../../../ui/controls";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import QuestionHeader from "../components/question-header";
import { ScreenSize } from "../../../../../ui/types";

import circleQuestionSamplePic from "../../../../../images/circle-question-sample-pic.jpg";
import { useState } from "react";

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
`;

//Компонент круг
const StyledCircle = styled.circle<{
  isClicked?: boolean;
}>`
  fill: ${({ isClicked }) => (isClicked ? "#5e0b77" : "rgb(102, 102, 102)")};
`;

// Компонент текст в круге
const StyledCircleText = styled.text`
  user-select: none;
  fill: white;
  font-size: 40px;
`;

// Пропсы круга
interface SvgCircleProps {
  cx: number;
  cy: number;
  r?: number;
  circleText?: string;
}

// Компонент объединяющий круг и текст
const SvgCircle: React.FC<SvgCircleProps> = ({ cx, cy, r, circleText }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <g onClick={() => setIsClicked(!isClicked)}>
      <StyledCircle cx={cx} cy={cy} r={r} isClicked={isClicked} />
      <StyledCircleText x={cx - 12} y={cy + 13}>
        {circleText}
      </StyledCircleText>
    </g>
  );
};

// Компонент вопрос №23
const CirclesQuestion: React.FC<{ number: number }> = ({ number }) => {
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

      <StyledQuestionSampleBox flex gap={"30px"} relative>
        <StyledQuestionSampleText>
          Соедините круги линией, начиная с цифры 1, чередуя затем цифры и
          буквы, и завершите на букве Е (1 – А – 2 – Б и т.д.).
        </StyledQuestionSampleText>
        <StyledImg src={circleQuestionSamplePic} />
      </StyledQuestionSampleBox>

      <Section flex>
        <Box flex between width="100%">
          <ArrowLeft onClick={() => onBack()} />
          <Box width="100%">
            {/*             <Button
              shape={ButtonShape.Circle}
              type={ButtonType.Primary}
              zoomOutOnHover={false}
            >
              1
            </Button>
            <Button
              shape={ButtonShape.Circle}
              type={ButtonType.Primary}
              zoomOutOnHover={false}
            >
              2
            </Button>
            <Button
              shape={ButtonShape.Circle}
              type={ButtonType.Primary}
              zoomOutOnHover={false}
            >
              3
            </Button> */}
            <StyledQuestionSVG
              id="circle"
              x="0px"
              y="0px"
              viewBox="0 0 800 400"
            >
              <line
                x1="40"
                y1="40"
                x2="140"
                y2="140"
                stroke="#5e0b77"
                stroke-width="10"
              />
              <SvgCircle cx={40} cy={40} r={30} circleText={"1"} />
              <SvgCircle cx={140} cy={140} r={30} circleText={"A"} />
              <SvgCircle cx={240} cy={40} r={30} circleText={"2"} />
              <SvgCircle cx={340} cy={140} r={30} circleText={"Б"} />
            </StyledQuestionSVG>
          </Box>
          <ArrowRight onClick={() => onForward()} />
        </Box>
      </Section>
    </Box>
  );
};

export default CirclesQuestion;
