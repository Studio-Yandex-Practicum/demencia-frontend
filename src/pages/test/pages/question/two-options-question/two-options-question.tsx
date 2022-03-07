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
  const [checked, setChecked] = useState(true);
  const [isError, setIsError] = useState(false);
  const [some, setSome] = useState("");
  const [other, setOther] = useState("");
  const [story, setStory] = useState("");

  useEffect(() => {
    if (localStorage.getItem(`${number}`)) {
      const localStorageDate = localStorage.getItem(`${number}`)?.split("-");
      if (localStorageDate) {
        const modifiedLocalStorageDate = localStorageDate?.map((item) => {
          if (item.startsWith("0")) {
            return item.slice(1);
          }
          return item;
        });

        setSome(modifiedLocalStorageDate[0]);
        setOther(modifiedLocalStorageDate[1]);
        setStory(modifiedLocalStorageDate[2]);
      }
    }
  }, [number]);

  const responseOptions = () => {
    return `${{ some } && { other } && { story }}`;
  };

  const firstId = document.getElementById("first");
  const secondId = document.getElementById("second");

  const goForward = () => {
    if (!firstId && !secondId) {
      console.log("IF");
      setIsError(false);

      const date = responseOptions();

      localStorage.setItem(`${number}`, date);

      navigate(`/test/question/${number + 1}`);
    } else {
      console.log("ELSE");
      setIsError(true);
      navigate("");
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
                  onChange={() => setChecked(!checked)}
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
                  onChange={() => setChecked(checked)}
                />
                <StyleLabel htmlFor="second">
                  {testData[number].second}
                </StyleLabel>
              </InputBox>
            </StyleQuestionInputs>
            {!checked && testData[number].needFirstDescription && (
              <BoxInputOne>
                <InputOne />
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
