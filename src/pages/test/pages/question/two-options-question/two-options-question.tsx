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
  BoxInputOne,
  StyledBoxArrowRight,
  StyledBoxArrowLeft,
  StyledInputList,
  InputOne,
  StyleLabel,
  ErrorText,
} from "./two-options-question-styles";
import { ArrowLeft, ArrowRight } from "../components/arrows";

const TwoOptionsQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [firstDescription, setFirstDescription] = useState("");

  const setChecked = (first: boolean, second: boolean) => {
    setFirstChecked(first);
    setSecondChecked(second);
  };

  useEffect(() => {
    if (localStorage.getItem(`${number}`)) {
      const answer = localStorage.getItem(`${number}`);
      if (answer) {
        if (answer === testData[number].second) {
          setChecked(false, true);
        } else {
          setChecked(true, false);
          if (answer !== testData[number].first) {
            setFirstDescription(answer);
          }
        }
      }
    }
  }, [number]);

  const makeAnswer = () => {
    return secondChecked
      ? testData[number].second || ""
      : firstChecked && firstDescription
      ? firstDescription
      : testData[number].first || "";
  };

  const goForward = () => {
    if (firstChecked || secondChecked) {
      setIsError(false);

      const answer = makeAnswer();

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
            <ArrowLeft
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
                  onChange={() => setChecked(false, true)}
                />
                <StyleLabel htmlFor="second">
                  {testData[number].second}
                </StyleLabel>
              </InputBox>
            </StyleQuestionInputs>
            {firstChecked && testData[number].needFirstDescription && (
              <BoxInputOne>
                <InputOne
                  value={firstDescription}
                  onChange={(e) => setFirstDescription(e.target.value)}
                />
              </BoxInputOne>
            )}
          </StyleBoxInputs>
          <StyledBoxArrowRight>
            <ArrowRight onClick={goForward} />
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

export default TwoOptionsQuestion;
