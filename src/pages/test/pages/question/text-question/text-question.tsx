import styled from "styled-components";
import { Box, Section, Subtitle1, Text1 } from "../../../../../ui/controls";
import {
  ScreenSize,
  TextColor,
  TypographyLevel,
} from "../../../../../ui/types";
import StyledInput from "../../../../../components/input-field";
import { ArrowLeft, ArrowRight } from "./decor";
import { testData } from "../../../data";

const StyledSection = styled(Section)`
  justify-content: flex-start;
  flex-direction: row;
  @media (max-width: ${ScreenSize.Small}px) {
    flex-direction: column;
  }
`;

const StyledBoxInput = styled(Box)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 90px auto;
  width: 100%;
`;

const StyleSubtitle1 = styled(Subtitle1)`
  @media (max-width: ${ScreenSize.Small}px) {
    margin: 0 auto;
    font-size: 60px;
  }
`;

const StyleText1 = styled(Text1)`
  @media (max-width: ${ScreenSize.Small}px) {
    margin: 20px auto;
    font-size: 30px;
  }
`;

const StyleArrowLeft = styled(ArrowLeft)`
  margin-right: 20px;
`;

const StyleArrowRight = styled(ArrowRight)`
  margin-left: 20px;
`;

const TextQuestion: React.FC<{ number: number }> = ({ number }) => {
  return (
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
          <StyleArrowLeft />
          <StyledInput />
          <StyleArrowRight />
        </StyledBoxInput>
      </Section>
    </Box>
  );
};

export default TextQuestion;
