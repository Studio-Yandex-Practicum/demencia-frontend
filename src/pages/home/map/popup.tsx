import React, { useState, RefObject, useEffect } from "react";
import styled from "styled-components";
import useMouse from "@react-hook/mouse-position";
import { Subtitle4, Text3 } from "../../../ui/controls/typography";
import { PaletteColor, ScreenSize } from "../../../ui/types";

const StyledBox = styled.div<{
  state?: string;
  left: number;
  top: number;
}>`
  position: absolute;
  border: 5px solid ${PaletteColor.Green};
  border-radius: 15px;
  width: 300px;
  min-height: 150px;
  padding: 8px;
  background-color: ${PaletteColor.White};
  z-index: 3;
  left: ${(props) => props.left || 0}px;
  top: ${(props) => props.top || 0}px;
  ${({ state }) =>
    state === "visible" ? "display: block;" : "display: none;"};
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 250px;
    min-height: 90px;
  }
`;

const StyledTitle = styled(Subtitle4)`
  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 12px;
  }
`;
const StyledText = styled(Text3)`
  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 10px;
  }
`;

interface PopupProps {
  mapRef: RefObject<SVGSVGElement>;
  isVisible: string;
  city: string;
  address: string;
  phoneNo: string;
}

const Popup: React.FC<PopupProps> = ({
  mapRef,
  isVisible,
  city,
  address,
  phoneNo,
}) => {
  const [posX, setPosX] = useState<number>(0);
  const [posY, setPosY] = useState<number>(0);
  const mouse = useMouse(mapRef as unknown as RefObject<HTMLElement>, {
    enterDelay: 200,
    leaveDelay: 200,
  });

  useEffect(() => {
    const defineX = () => {
      if (!mouse.isTouch) {
        if (mouse.clientX && mouse.x) {
          const cursorPositionOnMap = mouse.clientX / window.innerWidth;
          if (cursorPositionOnMap < 0.5) {
            return setPosX(mouse.x + 50);
          }
          return setPosX(mouse.x - 300);
        }
      }
      return setPosX(0);
    };

    const defineY = () => {
      if (!mouse.isTouch) {
        if (mouse.y) return setPosY(mouse.y - 150);
      }
      return setPosY(0);
    };

    if (isVisible === "visible") {
      defineX();
      defineY();
    }
  });

  return (
    <StyledBox left={posX} top={posY} state={isVisible}>
      <StyledTitle>{city}</StyledTitle>
      <StyledText mt={2}>{address}</StyledText>
      <StyledText mt={1}>{phoneNo}</StyledText>
    </StyledBox>
  );
};

export default Popup;
