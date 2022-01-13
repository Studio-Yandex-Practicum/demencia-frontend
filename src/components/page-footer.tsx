import { Box, Footer } from "../ui/controls";
import { TextBlock } from "../ui/controls/typography";
import { TypographyLevel } from "../ui/types";
import React from "react";

const PageFooter: React.FC = () => {
  const currentDate = new Date();

  return (
    <Footer>
      <Box ml={5}>
        <TextBlock level={TypographyLevel.Footer}>
          © {currentDate.getFullYear()} Благотворительный фонд «Память
          поколений»
        </TextBlock>
      </Box>
    </Footer>
  );
};

export default PageFooter;
