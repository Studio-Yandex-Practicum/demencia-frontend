import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Section } from "../../../../../../ui/controls";
import { testData } from "../../../data";
import QuestionHeader from "../../../../pages/question/question-header";
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
} from "./two-options-question-styles";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import { AppContext } from "../../../../../../components/contexts";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import ErrorText from "../components/error-text";
import LoadingText from "../components/loading-text";
import { answerQuery } from "../../../../../../utils";

const TwoOptionsQuestion: React.FC<{ number: number }> = ({ number }) => {
  const [createAnswer, { loading }] = useMutation(answerQuery());
  const { setLastQuestionId } = useContext(AppContext);
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
    } else {
      setChecked(false, false);
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
      if (setLastQuestionId) {
        setLastQuestionId(`${number + 1}`);
      }
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
                  checked={firstChecked}
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
                  checked={secondChecked}
                  onChange={() => setChecked(false, true)}
                />
                <StyleLabel htmlFor="second">
                  {testData[number].second}
                </StyleLabel>
              </InputBox>
            </StyleQuestionInputs>
            {firstChecked && testData[number].needFirstDescription && (
              <BoxInputOne mt={4} flex maxWidth={850}>
                <InputOne
                  placeholder="Какие изменения вы наблюдаете?"
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
            Необходимо ответить на вопрос, прежде чем переходить к следующему
          </ErrorText>
        )}
        {loading && <LoadingText>Отправка ответа...</LoadingText>}
      </Section>
    </Box>
  );
};

export default TwoOptionsQuestion;
