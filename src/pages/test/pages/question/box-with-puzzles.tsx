import styled from "styled-components";
import { Box } from "../../../../ui/controls";
import purpleSemicircleThin from "../../../../images/purple-semicircle.svg";
import greenAndPurplePuzzles from "../../../../images/green-and-purple-puzzles.svg";
import { ScreenSize } from "../../../../ui/types";

const StyledImageSemicircle = styled.img`
  position: absolute;
  width: 100px;
  top: 70px;
  right: 60px;
  object-fit: contain;
  object-position: center;
  transform: rotate(180deg);
`;
const StyledImagegreenAndPurplePuzzles = styled.img`
  position: absolute;
  width: 200px;
  top: 85px;
  right: 200px;
  object-fit: contain;
  object-position: center;
`;

const PuzzlesBox = styled(Box)`
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    display: none;
  }
`;

const BoxWithPuzzles: React.FC = () => {
  return (
    <PuzzlesBox width="100%">
      <StyledImagegreenAndPurplePuzzles src={greenAndPurplePuzzles} />
      <StyledImageSemicircle src={purpleSemicircleThin} />
    </PuzzlesBox>
  );
};

export default BoxWithPuzzles;
