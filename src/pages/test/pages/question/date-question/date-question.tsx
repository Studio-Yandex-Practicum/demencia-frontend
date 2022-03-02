import { Box, Section } from "../../../../../ui/controls";
import { TextColor, TypographyLevel } from "../../../../../ui/types";
import { ArrowLeft, ArrowRight } from "../text-question/decor";
import {
  StyleSelect,
  StyleInput,
  StyleSubtitle1,
  StyleText1,
  StyledSection,
  StyledBoxInput,
  StyledBoxArrowRight,
  StyledBoxArrowLeft,
  StyledBoxSelect,
} from "./date-question-styles";
import { testData } from "../../../data";

const DateQuestion: React.FC<{ number: number }> = ({ number }) => {
  const years = [...Array(new Date().getFullYear() - 1922 + 1)].map(
    (_, i) => 1922 + i
  );

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

  return (
    <>
      <Box>
        <StyledSection flex>
          <StyleSubtitle1
            textColor={TextColor.Shadow}
            level={TypographyLevel.MainTitle}
            maxWidth={90}
          >
            {number}
          </StyleSubtitle1>
          <StyleText1
            maxWidth={810}
            mt={6}
            mr={5}
            ml={0}
            textColor={TextColor.Accent1}
            level={TypographyLevel.Subtitle2}
          >
            {testData[number].question}
          </StyleText1>
        </StyledSection>

        <Section flex>
          <StyledBoxInput flex maxWidth={1900}>
            <StyledBoxArrowLeft>
              <ArrowLeft />
            </StyledBoxArrowLeft>

            <StyledBoxSelect flex width="100%">
              <StyleInput type="number" min="1" max="31" defaultValue="1" />
              <StyleSelect>
                {months.map((month, index) => (
                  <option key={index} value={index}>
                    {month}
                  </option>
                ))}
              </StyleSelect>
              <StyleSelect>
                {years.map((year, index) => (
                  <option key={index} value={index}>
                    {year}
                  </option>
                ))}
              </StyleSelect>
            </StyledBoxSelect>

            <StyledBoxArrowRight>
              <ArrowRight />
            </StyledBoxArrowRight>
          </StyledBoxInput>
        </Section>
      </Box>
    </>
  );
};

export default DateQuestion;
