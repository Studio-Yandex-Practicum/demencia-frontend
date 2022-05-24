import React from "react";
import styled from "styled-components";
import { Box, Button } from "../../../../../ui/controls";
import { ButtonShape, ButtonType, ScreenSize } from "../../../../../ui/types";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 50px);
  justify-content: center;
  width: min(1920px, 100%);
  gap: 15px;
  margin-top: 40px;

  @media (max-width: ${ScreenSize.MediumSmall}px) {
    margin-top: 20px;
  }
`;

const StyledButton = styled(Button)`
  transform: none !important;
  cursor: default;
`;

interface Props {
  pageID: string;
}

const Progress: React.FC<Props> = ({ pageID }) => {
  const pagesArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  const handleButtonStatus = (currentPage: number) => {
    if (+pageID > currentPage) return ButtonType.Visited;
    if (+pageID == currentPage) return ButtonType.Secondary;
    return ButtonType.Alt;
  };

  const renderDots = () => (
    <StyledDiv>
      {pagesArray.map((page) => (
        <Box mb={2} key={page}>
          <StyledButton
            shape={ButtonShape.Circle}
            type={handleButtonStatus(page)}
          >
            {page}
          </StyledButton>
        </Box>
      ))}
    </StyledDiv>
  );

  return <div>{renderDots()}</div>;
};

export default Progress;
