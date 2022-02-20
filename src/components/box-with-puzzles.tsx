import styled from "styled-components";
import { Box } from "../ui/controls";
import purpleSemicircleThin from "../images/purple-semicircle.svg";
import greenAndPurplePuzzles from "../images/green-and-purple-puzzles.svg";
import { ScreenSize } from "../ui/types";

const StyledImageSemicircle = styled.img`
  position: absolute;
  width: 100px;
  top: 91px;
  right: 60px;
  object-fit: contain;
  object-position: center;
  transform: rotate(180deg);
`;
const StyledImageGreenAndPurplePuzzles = styled.img`
  position: absolute;
  width: 200px;
  top: 106px;
  right: 200px;
  object-fit: contain;
  object-position: center;
`;

const PuzzlesBox = styled(Box)`
  padding-top: 300px;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    display: none;
  }
`;

const BoxWithPuzzles: React.FC = () => {
  return (
    <PuzzlesBox width="100%">
      <StyledImageGreenAndPurplePuzzles src={greenAndPurplePuzzles} />
      <StyledImageSemicircle src={purpleSemicircleThin} />
    </PuzzlesBox>
  );
};

export default BoxWithPuzzles;
