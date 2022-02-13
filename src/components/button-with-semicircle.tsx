import styled from "styled-components";
import { Box, Button } from "../ui/controls";
import { ButtonSize, ButtonType } from "../ui/types";
import greenSemicirclePic from "../images/green-semicircle.svg";

export const RelativeBox = styled(Box)`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  margin-right: 60px;
`;

export const StyledImg = styled.img`
  object-fit: contain;
  object-position: center;
  width: 60px;
  position: absolute;
  top: -32px;
  right: -35px;
`;

interface ButtonWithSemicircleProps {
  maxWidth?: number;
  buttonText?: string;
}

const ButtonWithSemicircle: React.FC<ButtonWithSemicircleProps> = ({
  maxWidth,
  buttonText,
}) => {
  return (
    <RelativeBox maxWidth={maxWidth}>
      <Button
        type={ButtonType.Primary}
        zoomOnHover
        zoomOutOnHover={false}
        fullWidth
        size={ButtonSize.Default}
      >
        {buttonText || "Пройти тест"}
      </Button>
      <StyledImg src={greenSemicirclePic} />
    </RelativeBox>
  );
};

export default ButtonWithSemicircle;
