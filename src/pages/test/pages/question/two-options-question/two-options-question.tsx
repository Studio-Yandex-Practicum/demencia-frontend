import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Section } from "../../../../../ui/controls";
import { testData } from "../../../data";
import QuestionText from "../questionText";
import {
  StyledBoxInput,
  InputBox,
  StyleBoxInputs,
  StyleQuestionInputs,
  StyleArrowLeft,
  StyleArrowRight,
  StyledInputList,
  InputOne,
  StyleLabel,
} from "./two-options-question-styles";

const TwoOptionsQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(true);

  return (
    <Box>
      <QuestionText number={number} />
      <Section flex>
        <StyledBoxInput flex maxWidth={1900}>
          <StyleArrowLeft
            onClick={() => navigate(`/test/question/${number - 1}`)}
          />
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
          <StyleArrowRight
            onClick={() => navigate(`/test/question/${number + 1}`)}
          />
        </StyledBoxInput>
      </Section>
    </Box>
  );
};

export default TwoOptionsQuestion;
