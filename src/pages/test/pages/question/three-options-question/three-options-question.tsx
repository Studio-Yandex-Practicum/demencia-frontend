import { useMutation } from "@apollo/client";
import { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../../components/contexts";
import { CREATE_ANSWER } from "../../../../../gql/mutation/create-answer";
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
  const [createAnswer] = useMutation(CREATE_ANSWER);
  const { setLastQuestionId } = useContext(AppContext);
  const navigate = useNavigate();
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(false);
  const [isError, setIsError] = useState(false);

  const setChecked = (first: boolean, second: boolean, third: boolean) => {
    setFirstChecked(first);
    setSecondChecked(second);
    setThirdChecked(third);
  };

  useEffect(() => {
    const answer = localStorage.getItem(`${number}`);
    if (answer) {
      if (answer === testData[number].first) {
        setChecked(true, false, false);
      } else if (answer === testData[number].second) {
        setChecked(false, true, false);
      } else if (answer === testData[number].third) {
        setChecked(false, false, true);
      }
    } else {
      setChecked(false, false, false);
    }
  }, [number]);

  const makeAnswer = () => {
    return firstChecked
      ? testData[number].first || ""
      : secondChecked
      ? testData[number].second || ""
      : thirdChecked
      ? testData[number].third || ""
      : "";
  };

  const goForward = () => {
    if (firstChecked || secondChecked || thirdChecked) {
      setIsError(false);

      const answer = makeAnswer();

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
                  checked={firstChecked}
                  onChange={() => setChecked(true, false, false)}
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
                  checked={secondChecked}
                  onChange={() => setChecked(false, true, false)}
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
                  checked={thirdChecked}
                  onChange={() => setChecked(false, false, true)}
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
            Необходимо ответить на вопрос, прежде чем переходить к следующему
          </ErrorText>
        )}
      </Section>
    </Box>
  );
};

export default ThreeOptionsQuestion;
