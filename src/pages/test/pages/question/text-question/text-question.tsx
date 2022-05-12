import {
  StyledBoxArrowLeft,
  StyledBoxArrowRight,
  StyledBoxInput,
  TextInputBox,
} from "./text-question-styles";
import { Box, Section } from "../../../../../ui/controls";
import StyledInput from "../../../../../components/input-field";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import QuestionHeader from "../components/question-header";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../../components/contexts";
import { CREATE_ANSWER } from "../../../../../gql/mutation/create-answer";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import ErrorText from "../components/error-text";
import LoadingText from "../components/loading-text";

const TextQuestion: React.FC<{ number: number }> = ({ number }) => {
  const [createAnswer, { loading }] = useMutation(CREATE_ANSWER);
  const navigate = useNavigate();
  const { setLastQuestionId } = useContext(AppContext);

  const [textAnswer, setTextAnswer] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(`${number}`)) {
      const localAnswer = localStorage.getItem(`${number}`);
      if (localAnswer) {
        setTextAnswer(localAnswer);
      }
    } else {
      setTextAnswer("");
    }
  }, [number]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (number !== 17) {
      setTextAnswer(e.target.value.replace(/[^а-яё\-\s]/gi, ""));
    } else if (number === 17) {
      setTextAnswer(e.target.value.replace(/[^а-яё\s\d]/gi, ""));
    } else {
      setTextAnswer(e.target.value);
    }
  };

  const onBack = () => {
    if (number > 1) {
      navigate(`/test/question/${number - 1}`);
    }
  };

  const onForward = () => {
    if (textAnswer.trim().length !== 0 || number === 8) {
      setIsError(false);
      const testId = JSON.parse(localStorage.getItem("test_id") || "");
      createAnswer({
        variables: {
          input: {
            answerValue: textAnswer,
            testCase: { id: testId },
            question: number,
          },
        },
      })
        .then((res) => {
          if (res.data.createAnswer.ok === true) {
            localStorage.setItem(`${number}`, textAnswer);
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
    } else setIsError(true);
  };

  return (
    <Box>
      <QuestionHeader number={number} />

      <Section centered flex>
        <StyledBoxInput flex maxWidth={1900}>
          <StyledBoxArrowLeft>
            <ArrowLeft onClick={onBack} />
          </StyledBoxArrowLeft>

          <TextInputBox width="100%">
            <StyledInput
              onChange={handleChange}
              value={textAnswer}
              maxLength={100}
              placeholder={
                number === 17
                  ? "Только буквы кириллицы и цифры"
                  : "Допустимы только буквы кириллицы"
              }
            />
          </TextInputBox>

          <StyledBoxArrowRight>
            <ArrowRight onClick={onForward} />
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

export default TextQuestion;
