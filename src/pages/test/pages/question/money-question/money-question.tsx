import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Section } from "../../../../../ui/controls";
import QuestionHeader from "../components/question-header";
import {
  StyledBoxInput,
  StyleInput,
  StyledBoxArrowRight,
  StyledBoxArrowLeft,
  StyledBoxSelect,
  StyleLabel,
  ErrorText,
  InputBox,
} from "./money-question-styles";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import { AppContext } from "../../../../../components/contexts";
import { useMutation } from "@apollo/client";
import { CREATE_ANSWER } from "../../../../../gql/mutation/create-answer";
import toast from "react-hot-toast";

const MoneyQuestion: React.FC<{ number: number }> = ({ number }) => {
  const [createAnswer] = useMutation(CREATE_ANSWER);
  const { setLastQuestionId } = useContext(AppContext);
  const navigate = useNavigate();
  const [firstAnswer, setFirstAnswer] = useState("");
  const [secondAnswer, setSecondAnswer] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChangeFirstQuestion = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstAnswer(e.target.value);
  };

  const handleChangeSecondQuestion = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSecondAnswer(e.target.value);
  };

  useEffect(() => {
    if (localStorage.getItem(`${number}`)) {
      const localStorageDate = localStorage.getItem(`${number}`)?.split(",");
      if (localStorageDate) {
        setFirstAnswer(localStorageDate[0]);
        setSecondAnswer(localStorageDate[1]);
      } else {
        setFirstAnswer("");
        setSecondAnswer("");
      }
    }
  }, [number]);

  const makeAnswer = () => {
    return `${firstAnswer},${secondAnswer}`;
  };

  const goForward = () => {
    if (firstAnswer && secondAnswer) {
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
      navigate("");
    }
  };

  return (
    <Box>
      <QuestionHeader number={number} />
      <Section centered flex>
        <StyledBoxInput flex maxWidth={1900}>
          <StyledBoxArrowLeft>
            <ArrowLeft
              onClick={() => navigate(`/test/question/${number - 1}`)}
            />
          </StyledBoxArrowLeft>
          <StyledBoxSelect flex maxWidth={1200}>
            <InputBox>
              <StyleInput
                type="number"
                min="0"
                max="99"
                step="1"
                defaultValue={firstAnswer}
                onChange={handleChangeFirstQuestion}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <StyleLabel>рублей</StyleLabel>
            </InputBox>
            <InputBox>
              <StyleInput
                type="number"
                min="0"
                max="99"
                step="1"
                defaultValue={secondAnswer}
                onChange={handleChangeSecondQuestion}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <StyleLabel>копеек</StyleLabel>
            </InputBox>
          </StyledBoxSelect>
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

export default MoneyQuestion;
