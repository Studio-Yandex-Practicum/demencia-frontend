import { useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../../../components/contexts";
import { Box } from "../../../../../../ui/controls";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import ErrorText from "../components/error-text";
import LoadingText from "../components/loading-text";
import QuestionHeader from "../../../../pages/question/question-header";
import {
  StyledBox,
  StyledBoxArrowLeft,
  StyledBoxArrowRight,
  StyledButton,
  StyledSection,
} from "./memory-test-question-styles";
import { answerQuery } from "../../../../../../utils";

const MemoryTestQuestion: React.FC<{ number: number }> = ({ number }) => {
  const [createAnswer, { loading }] = useMutation(answerQuery());
  const { setLastQuestionId } = useContext(AppContext);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const onPressButton = () => {
    setIsError(false);

    const answer = "true";

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
  };

  const goForward = () => {
    if (localStorage.getItem(`${number}`)) {
      navigate(`/test/question/${number + 1}`);
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      <Box>
        <QuestionHeader number={number} />

        <StyledSection centered flex>
          <StyledBoxArrowLeft>
            <ArrowLeft
              onClick={() => navigate(`/test/question/${number - 1}`)}
            />
          </StyledBoxArrowLeft>

          <StyledBox>
            <StyledButton
              zoomOnHover
              zoomOutOnHover={false}
              onClick={onPressButton}
            >
              ПОНЯТНО. ДАЛЕЕ
            </StyledButton>
          </StyledBox>

          <StyledBoxArrowRight>
            <ArrowRight onClick={goForward} />
          </StyledBoxArrowRight>
        </StyledSection>
        {isError && (
          <ErrorText>
            Необходимо ответить на вопрос, прежде чем переходить к следующему
          </ErrorText>
        )}
        {loading && <LoadingText>Отправка ответа...</LoadingText>}
      </Box>
    </>
  );
};

export default MemoryTestQuestion;
