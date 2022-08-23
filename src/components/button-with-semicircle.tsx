import styled from "styled-components";
import { Box, Button } from "../ui/controls";
import { ButtonSize, ButtonType } from "../ui/types";
import greenSemicirclePic from "../images/green-semicircle.svg";
import AnimationWrapper from "./animation-wrapper";

export const RelativeBox = styled(Box)`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  align-items: center;
`;

export const StyledImg = styled.img<{
  animate?: boolean;
}>`
  object-fit: contain;
  object-position: center;
  width: 60px;
  position: absolute;
  top: -32px;
  right: -35px;
  transition: all 1s ease;
  ${({ animate }) =>
    animate ? "opacity: 0; transform: translateX(100px);" : ""}
`;

interface ButtonWithSemicircleProps {
  maxWidth?: number;
  margin?: string;
  buttonText?: string;
  animate?: boolean;
  onClick?: () => void;
}

const ButtonWithSemicircle: React.FC<ButtonWithSemicircleProps> = ({
  maxWidth,
  buttonText,
  margin,
  animate,
  onClick,
}) => {
  return (
    <RelativeBox maxWidth={maxWidth} margin={margin}>
      {animate ? (
        <>
          <AnimationWrapper>
            <Button
              type={ButtonType.Primary}
              zoomOnHover
              zoomOutOnHover={false}
              fullWidth
              size={ButtonSize.Default}
              ellipsis
              onClick={onClick}
            >
              {buttonText || "Пройти тест"}
            </Button>
          </AnimationWrapper>
        </>
      ) : (
        <>
          <Button
            type={ButtonType.Primary}
            zoomOnHover
            zoomOutOnHover={false}
            fullWidth
            size={ButtonSize.Default}
            onClick={onClick}
          >
            {buttonText || "Пройти тест"}
          </Button>
          <StyledImg src={greenSemicirclePic} />
        </>
      )}
    </RelativeBox>
  );
};

export default ButtonWithSemicircle;
