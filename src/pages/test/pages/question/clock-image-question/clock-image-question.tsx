import { useMutation } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../../components/contexts";
import { CREATE_ANSWER } from "../../../../../gql/mutation/create-answer";
import { Box, Section } from "../../../../../ui/controls";
import { TextColor, TypographyLevel } from "../../../../../ui/types";
import QuestionHeader from "../components/question-header";
import QuestionTextUnfolding from "../components/question-text-unfolding";
import {
  StyledBox,
  StyleBoxInputs,
  StyledBoxArrowRight,
  StyledBoxArrowLeft,
  StyledArrowLeft,
  StyledArrowRight,
  StyledText1,
  ErrorText,
  StyledInput,
  StyledLabel,
  StyledBoxInput,
} from "./clock-image-question-style";

const ClockImageQuestion: React.FC<{ number: number }> = ({ number }) => {
  const [createAnswer] = useMutation(CREATE_ANSWER);
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
    if (e.target.validity.valid && e.target.files) {
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
            <StyledBoxInput flex>
              <StyledText1
                textColor={TextColor.Primary}
                level={TypographyLevel.Subtitle3}
              >
                Нарисуйте циферблат и разместите на нем цифры. Расположите
                стрелки так, чтобы часы показывали без десяти минут 14 часов.
              </StyledText1>
            </StyledBoxInput>
            <StyledBoxInput flex column>
              <StyledLabel htmlFor="file_drawClock">{buttonText}</StyledLabel>
              <StyledInput
                id="file_drawClock"
                type="file"
                accept="image/jpeg"
                onChange={handleChange}
                disabled={isSelected}
              />
            </StyledBoxInput>
          </StyleBoxInputs>
          <StyledBoxArrowRight>
            <StyledArrowRight onClick={goForward} />
          </StyledBoxArrowRight>
        </StyledBox>
        {isError && (
          <ErrorText>
            Необходимо загрузить рисунок, прежде, чем переходить к следующему
            вопросу
          </ErrorText>
        )}
      </Section>
    </Box>
  );
};

export default ClockImageQuestion;
