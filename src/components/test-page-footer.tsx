import styled from "styled-components";
import { Box } from "../ui/controls";
import { TextBlock } from "../ui/controls/typography";
import { TypographyLevel, ScreenSize } from "../ui/types";
import React from "react";

const StyleTextBlock = styled(TextBlock)`
  @media (max-width: ${ScreenSize.Small}px) {
    text-align: center;
  }
`;

const TestPageFooter: React.FC = () => {
  return (
    <Box mr={4}>
      <StyleTextBlock level={TypographyLevel.Footer}>
        Материалы подготовлены на базе: Self-Administered Gerocognitive Exam –
        SAGE Test Form.
      </StyleTextBlock>
      <StyleTextBlock level={TypographyLevel.Footer}>
        COPYRIGHT © 2013 THE OHIO STATE UNIVERSITY ALL RIGHTS RESERVED Douglas
        W. Scharre, Scharre.1@osu.edu, (614) 293-4969
      </StyleTextBlock>
    </Box>
  );
};

export default TestPageFooter;
