import styled from "styled-components";
import { Box, Section, Subtitle1, Text1 } from "../../../../ui/controls";
import { ScreenSize, TextColor, TypographyLevel } from "../../../../ui/types";
import { testData } from "../../data";

const StyledSection = styled(Section)`
  justify-content: flex-start;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: ${ScreenSize.Medium}px) {
    flex-direction: column;
  }
`;

const StyleSubtitle1 = styled(Subtitle1)`
  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 70px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    margin: 0 auto;
    font-size: 60px;
  }
`;

const StyleText1 = styled(Text1)`
  @media (max-width: ${ScreenSize.Medium}px) {
    text-align: center;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    margin: 20px auto;
    font-size: 30px;
  }
`;

const QuestionText: React.FC<{ number: number }> = ({ number }) => {
  return (
    <Box>
      <StyledSection flex>
        <StyleSubtitle1
          textColor={TextColor.Shadow}
          level={TypographyLevel.MainTitle}
          maxWidth={200}
        >
          {number}
        </StyleSubtitle1>
        <StyleText1
          maxWidth={700}
          mr={5}
          ml={3}
          textColor={TextColor.Accent1}
          level={TypographyLevel.Subtitle2}
        >
          {testData[number].question}
        </StyleText1>
      </StyledSection>
    </Box>
  );
};

export default QuestionText;
