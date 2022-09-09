import {
  StyledBoxArrowLeft,
  StyledBoxArrowRight,
  StyledBoxInput,
  TextInputBox,
} from "./text-question-styles";
import { Box, Section } from "../../../../ui/controls";
import StyledInput from "../../../../components/input-field";
import {
  ArrowLeft,
  ArrowRight,
} from "../../for-myself/pages/question/components/arrows";
import QuestionHeader from "../../for-myself/pages/question/components/question-header";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../components/contexts";
import { CREATE_ANSWER } from "../../../../gql/mutation/create-answer";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import ErrorText from "../../for-myself/pages/question/components/error-text";
import LoadingText from "../../for-myself/pages/question/components/loading-text";
import {
  getTestId,
  getTestNumber,
  setTestNumber,
  testBaseUrl,
} from "../../../../utils";

const TextQuestion: React.FC<{ number: number; forClosePerson: boolean }> = ({
  number,
  forClosePerson,
}) => {
  const [createAnswer, { loading }] = useMutation(CREATE_ANSWER);
  const navigate = useNavigate();
  const { setLastQuestionId } = useContext(AppContext);
  const routeForTest = testBaseUrl(forClosePerson);

  const [textAnswer, setTextAnswer] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (getTestNumber(number, forClosePerson)) {
      const localAnswer = getTestNumber(number, forClosePerson);
      if (localAnswer) {
        setTextAnswer(localAnswer);
      }
    } else {
      setTextAnswer("");
    }
  }, [number, forClosePerson]);

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
      navigate(`${routeForTest}/question/${number - 1}`);
    }
  };

  const onForward = () => {
    let answer = textAnswer.trim();

    if (number === 1) {
      answer = answer.replace(/^-+/, "").replace(/-+$/, "");
      if (!answer.length) {
        setTextAnswer("");
      }
    }

    if (answer.length !== 0 || number === 8) {
      setIsError(false);
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
