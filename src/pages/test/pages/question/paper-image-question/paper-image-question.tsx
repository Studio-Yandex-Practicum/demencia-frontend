import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  StyledPaper,
} from "./paper-image-question-style";

const PaperImageQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();
  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isError, setIsError] = useState(false);
  const [buttonText, setButtonText] = useState("Добавить файл");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
      setIsSelected(true);
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
      navigate(`/test/question/${number + 1}`);
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
                Нарисуйте этот рисунок, сфотографируйте его и загрузите файл
              </StyledText1>
            </StyledBoxInput>
            <StyledBoxInput flex>
              <StyledLabel htmlFor="file_drawClock">
                {isSelected ? "Загружен" : "Добавить файл"}
              </StyledLabel>
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
            Необходимо ответить на вопрос, прежде, чем переходить к следующему
          </ErrorText>
        )}
      </Section>
    </Box>
  );
};

export default PaperImageQuestion;
