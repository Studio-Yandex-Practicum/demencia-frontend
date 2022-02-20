import styled from "styled-components";
import { Box, Footer } from "../ui/controls";
import { TextBlock } from "../ui/controls/typography";
import { TypographyLevel, ScreenSize } from "../ui/types";
import React from "react";

const StyleTextBlock = styled(TextBlock)`
  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 10px;
  }
`;

const StyleBox = styled(Box)`
  @media (max-width: ${ScreenSize.Small}px) {
    margin: 0 10px;
  }
`;

const TestPageFooter: React.FC = () => {
  return (
    <Footer>
      <StyleBox maxWidth={700} ml={5}>
        <StyleTextBlock level={TypographyLevel.Footer}>
          Материалы подготовлены на базе: Self-Administered Gerocognitive Exam –
          SAGE Test Form.
        </StyleTextBlock>
        <StyleTextBlock level={TypographyLevel.Footer}>
          COPYRIGHT © 2013 THE OHIO STATE UNIVERSITY ALL RIGHTS RESERVED Douglas
          W. Scharre,
        </StyleTextBlock>
        <StyleTextBlock level={TypographyLevel.Footer}>
          Scharre.1@osu.edu, (614) 293-4969
        </StyleTextBlock>
      </StyleBox>
    </Footer>
  );
};

export default TestPageFooter;
