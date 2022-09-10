import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Section } from "../../../../../ui/controls";
import { testData } from "../../../for-myself/data";
import QuestionHeader from "../question-header";
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
import {
  ArrowLeft,
  ArrowRight,
} from "../../../for-myself/pages/question/components/arrows";
import { AppContext } from "../../../../../components/contexts";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import ErrorText from "../../../for-myself/pages/question/components/error-text";
import LoadingText from "../../../for-myself/pages/question/components/loading-text";
import {
  answerQuery,
  getTestId,
  getTestNumber,
  setTestNumber,
  testBaseUrl,
} from "../../../../../utils";

const TwoOptionsQuestion: React.FC<{
  number: number;
  forClosePerson: boolean;
}> = ({ number, forClosePerson }) => {
  const [createAnswer, { loading }] = useMutation(answerQuery(forClosePerson));
  const { setLastQuestionId } = useContext(AppContext);
  const navigate = useNavigate();
  const [firstChecked, setFirstChecked] = useState(false);
  const [secondChecked, setSecondChecked] = useState(false);
  const [isError, setIsError] = useState(false);
  const [firstDescription, setFirstDescription] = useState("");
  const routeForTest = testBaseUrl(forClosePerson);

  const setChecked = (first: boolean, second: boolean) => {
    setFirstChecked(first);
    setSecondChecked(second);
  };

  useEffect(() => {
    if (getTestNumber(number, forClosePerson)) {
      const answer = getTestNumber(number, forClosePerson);
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
  }, [forClosePerson, number]);

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

      const testId = JSON.parse(getTestId(forClosePerson) || "");
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
            setTestNumber(number, answer, forClosePerson);
            if (setLastQuestionId) {
              setLastQuestionId(`${number + 1}`);
            }
            const to =
              number === 25
                ? `${routeForTest}/result`
                : `${routeForTest}/question/${number + 1}`;
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
