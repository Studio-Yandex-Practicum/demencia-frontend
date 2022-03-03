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
} from "./date-question-styles";
import { useNavigate } from "react-router-dom";
import QuestionHeader from "../components/question-header";
import arrowSelect from "../../../../../images/arrow-select.svg";

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

  return (
    <>
      <Box>
        <QuestionHeader number={number} />

        <Section flex>
          <StyledBoxInput flex maxWidth={1900}>
            <StyledBoxArrowLeft>
              <ArrowLeft
                onClick={() => navigate(`/test/question/${number - 1}`)}
              />
            </StyledBoxArrowLeft>

            <StyledBoxSelect flex width="100%">
              <StyleInput type="number" min="1" max="31" defaultValue="1" />
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
                onClick={() => navigate(`/test/question/${number + 1}`)}
              />
            </StyledBoxArrowRight>
          </StyledBoxInput>
        </Section>
      </Box>
    </>
  );
};

export default DateQuestion;
