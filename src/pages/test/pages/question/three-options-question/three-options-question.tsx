import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Section } from "../../../../../ui/controls";
import { testData } from "../../../data";
import QuestionHeader from "../components/question-header";
import {
  StyledBoxInput,
  InputBox,
  StyleBoxInputs,
  StyleQuestionInputs,
  StyledBoxArrowRight,
  StyledBoxArrowLeft,
  StyledArrowLeft,
  StyledArrowRight,
  StyledInputList,
  StyleLabel,
  ErrorText,
} from "./three-options-question-styles";

const ThreeOptionsQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, sethirdChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  // const [firstDescription, setFirstDescription] = useState("");

  const setChecked = (first: boolean, second: boolean) => {
    setFirstChecked(first);
    setSecondChecked(second);
    // sethirdChecked(third);
  };

  useEffect(() => {
    if (localStorage.getItem(`${number}`)) {
      const answer = localStorage.getItem(`${number}`);
      if (answer) {
        if (
          answer === testData[number].first ||
          answer === testData[number].second ||
          answer === testData[number].third
        ) {
          setChecked(true, false);
        }
      }
    }
  }, [number]);

  const makeAnswer = () => {
    return firstChecked
      ? testData[number].first || ""
      : secondChecked && secondChecked
      ? testData[number].second || ""
      : thirdChecked && thirdChecked
      ? thirdChecked
      : testData[number].third || "";
  };

  const goForward = () => {
    if (firstChecked || secondChecked || thirdChecked) {
      setIsError(false);

      const answer = new Boolean(makeAnswer()).toString();

      localStorage.setItem(`${number}`, answer);

      navigate(`/test/question/${number + 1}`);
    } else {
      setIsError(true);
    }
  };

  return (
    <Box>
      <QuestionHeader number={number} />
      <Section flex>
        <StyledBoxInput flex maxWidth={1900}>
          <StyledBoxArrowLeft>
            <StyledArrowLeft
              onClick={() => navigate(`/test/question/${number - 1}`)}
            />
          </StyledBoxArrowLeft>
          <StyleBoxInputs flex maxWidth={850}>
            <StyleQuestionInputs>
              <InputBox>
                <StyledInputList
                  id="first"
                  name="a"
                  type="radio"
                  onChange={() => setChecked(true, false)}
                />
                <StyleLabel htmlFor="first">
                  {testData[number].first}
                </StyleLabel>
              </InputBox>
              <InputBox>
                <StyledInputList
                  id="second"
                  name="a"
                  type="radio"
                  onChange={() => setChecked(true, false)}
                />
                <StyleLabel htmlFor="second">
                  {testData[number].second}
                </StyleLabel>
              </InputBox>
              <InputBox>
                <StyledInputList
                  id="third"
                  name="a"
                  type="radio"
                  onChange={() => setChecked(true, false)}
                />
                <StyleLabel htmlFor="third">
                  {testData[number].third}
                </StyleLabel>
              </InputBox>
            </StyleQuestionInputs>
          </StyleBoxInputs>
          <StyledBoxArrowRight>
            <StyledArrowRight onClick={goForward} />
          </StyledBoxArrowRight>
        </StyledBoxInput>
        {isError && (
          <ErrorText>
            Необходимо ответить на вопрос, прежде, чем переходить к следующему
          </ErrorText>
        )}
      </Section>
    </Box>
  );
};

export default ThreeOptionsQuestion;
