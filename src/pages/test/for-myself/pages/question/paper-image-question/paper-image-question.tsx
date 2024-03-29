import { useMutation } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../../../components/contexts";
import { Box, Section } from "../../../../../../ui/controls";
import { TextColor, TypographyLevel } from "../../../../../../ui/types";
import ErrorText from "../components/error-text";
import LoadingText from "../components/loading-text";
import QuestionHeader from "../../../../pages/question/question-header";
import QuestionTextUnfolding from "../components/question-text-unfolding";
import {
  StyledBox,
  StyleBoxInputs,
  StyledBoxArrowRight,
  StyledBoxArrowLeft,
  StyledArrowLeft,
  StyledArrowRight,
  StyledText1,
  StyledInput,
  StyledLabel,
  StyledBoxInput,
  StyledPaper,
} from "./paper-image-question-style";
import { answerQuery } from "../../../../../../utils";

const PaperImageQuestion: React.FC<{ number: number }> = ({ number }) => {
  const [createAnswer, { loading }] = useMutation(answerQuery());
  const { setLastQuestionId } = useContext(AppContext);
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);
  const [isError, setIsError] = useState(false);
  const [buttonText, setButtonText] = useState("Добавить файл");

  useEffect(() => {
    if (localStorage.getItem(`${number}`)) {
      setIsSelected(true);
      setButtonText("Загружено");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.validity.valid);
    console.log(e.target.files);
    if (
      e.target.validity.valid &&
      e.target.files &&
      e.target.files.length !== 0
    ) {
      const testId = JSON.parse(localStorage.getItem("test_id") || "");
      setButtonText("Загрузка...");
      createAnswer({
        variables: {
          input: {
            testCase: { id: testId },
            question: number,
            image: e.target.files[0],
          },
        },
      })
        .then((res) => {
          if (res.data.createAnswer.ok === true) {
            setButtonText("Загружено");
            setIsSelected(true);
            localStorage.setItem(`${number}`, "true");
            if (setLastQuestionId) {
              setLastQuestionId(`${number + 1}`);
            }
          }
        })
        .catch((err) => {
          console.log(err);
          setButtonText("Добавить файл");
          toast.error(`Ошибка сервера`);
          setIsSelected(false);
        });
    }
  };

  const onBack = () => {
    if (number > 1) {
      navigate(`/test/question/${number - 1}`);
    }
  };

  const goForward = () => {
    if (isSelected) {
      setIsError(false);
      const to =
        number === 25 ? "/test/result" : `/test/question/${number + 1}`;
      navigate(to);
    } else {
      setIsError(true);
    }
  };

  return (
    <Box>
      <QuestionHeader number={number} />
      <QuestionTextUnfolding />
      <Section flex>
        <StyledBox flex maxWidth={1900}>
          <StyledBoxArrowLeft>
            <StyledArrowLeft onClick={onBack} />
          </StyledBoxArrowLeft>
          <StyleBoxInputs>
            <StyledPaper />
            <StyledBoxInput flex>
              <StyledText1
                textColor={TextColor.Primary}
                level={TypographyLevel.Subtitle3}
              >
                Нарисуйте этот рисунок, сфотографируйте его и загрузите файл.
              </StyledText1>
            </StyledBoxInput>
            <StyledBoxInput flex column>
              <StyledLabel htmlFor="file_drawClock">{buttonText}</StyledLabel>
              <StyledInput
                id="file_drawClock"
                type="file"
                accept="image/jpeg"
                onChange={handleChange}
              />
            </StyledBoxInput>
          </StyleBoxInputs>
          <StyledBoxArrowRight>
            <StyledArrowRight onClick={goForward} />
          </StyledBoxArrowRight>
        </StyledBox>
        {isError && (
          <ErrorText>
            Необходимо загрузить рисунок, прежде чем переходить к следующему
            вопросу
          </ErrorText>
        )}
        {loading && <LoadingText>Отправка ответа...</LoadingText>}
      </Section>
    </Box>
  );
};

export default PaperImageQuestion;
