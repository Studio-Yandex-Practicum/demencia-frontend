import { useState } from "react";
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
  StyledInputList,
  InputOne,
  StyleLabel,
} from "./two-options-question-styles";
import { ArrowLeft, ArrowRight } from "../components/arrows";

const TwoOptionsQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(true);

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
                  name="a"
                  type="radio"
                  onChange={() => setChecked(!checked)}
                />
                <StyleLabel htmlFor="first">
                  {testData[number].first}
                </StyleLabel>
              </InputBox>
              <InputBox>
                <StyledInputList
                  name="a"
                  type="radio"
                  onChange={() => setChecked(checked)}
                />
                <StyleLabel htmlFor="second">
                  {testData[number].second}
                </StyleLabel>
              </InputBox>
            </StyleQuestionInputs>
            {!checked && testData[number].needFirstDescription && <InputOne />}
          </StyleBoxInputs>
          <StyledBoxArrowRight>
            <ArrowRight
              onClick={() => navigate(`/test/question/${number + 1}`)}
            />
          </StyledBoxArrowRight>
        </StyledBoxInput>
      </Section>
    </Box>
  );
};

export default TwoOptionsQuestion;
