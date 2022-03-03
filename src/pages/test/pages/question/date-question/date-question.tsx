import { Box, Section } from "../../../../../ui/controls";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import {
  StyleSelect,
  StyleInput,
  StyledBoxInput,
  StyledBoxArrowRight,
  StyledBoxArrowLeft,
  StyledBoxSelect,
  StyledImg,
  StyledBoxCurrentSelect,
  ErrorText,
} from "./date-question-styles";
import { useNavigate } from "react-router-dom";
import QuestionHeader from "../components/question-header";
import arrowSelect from "../../../../../images/arrow-select.svg";
import { useState } from "react";

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const years = [...Array(new Date().getFullYear() - 1922 + 1)].map(
  (_, i) => 1922 + i
);

const DateQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();
  const [birthDay, setBirthDay] = useState("");
  const [isError, setIsError] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (birthDay.length === 2) {
      e.target.value = e.target.value.slice(0, 2);
    }
    setBirthDay(e.target.value);
  };

  return (
    <>
      <Box>
        <QuestionHeader number={number} />

        <Section centered flex>
          <StyledBoxInput flex maxWidth={1900}>
            <StyledBoxArrowLeft>
              <ArrowLeft
                onClick={() => navigate(`/test/question/${number - 1}`)}
              />
            </StyledBoxArrowLeft>

            <StyledBoxSelect flex width="100%">
              <StyleInput
                type="number"
                min="1"
                max="31"
                maxLength={2}
                defaultValue={birthDay}
                onChange={handleChange}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <StyledBoxCurrentSelect>
                <StyleSelect>
                  {months.map((month, index) => (
                    <option key={index} value={index}>
                      {month}
                    </option>
                  ))}
                </StyleSelect>
                <StyledImg src={arrowSelect} />
              </StyledBoxCurrentSelect>
              <StyledBoxCurrentSelect>
                <StyleSelect>
                  {years.map((year, index) => (
                    <option key={index} value={index}>
                      {year}
                    </option>
                  ))}
                </StyleSelect>
                <StyledImg src={arrowSelect} />
              </StyledBoxCurrentSelect>
            </StyledBoxSelect>

            <StyledBoxArrowRight>
              <ArrowRight
                onClick={() => {
                  if (birthDay) {
                    setIsError(false);
                    navigate(`/test/question/${number + 1}`);
                  } else {
                    setIsError(true);
                    navigate("");
                  }
                }}
              />
            </StyledBoxArrowRight>
          </StyledBoxInput>
          {isError && (
            <ErrorText>
              Необходимо ответить на вопрос, прежде, чем переходить к следующему
            </ErrorText>
          )}
        </Section>
      </Box>
    </>
  );
};

export default DateQuestion;
