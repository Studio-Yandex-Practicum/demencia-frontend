import styled from "styled-components";
import slideLeft from "../../../../images/slid-left.svg";
import slideRight from "../../../../images/slid-right.svg";
import cursor from "../../../../images/cursor_pointer.svg";
import { ScreenSize } from "../../../../ui/types";

const SwiperButton = styled.div<{
  type?: string;
}>`
  background-image: url(${({ type }) =>
    type === "left" ? slideLeft : slideRight});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 1000;
  position: absolute;
  ${({ type }) => (type === "left" ? "left: 10px;" : "right: 10px;")}
  top: calc(100% / 2 - 25px);
  width: 50px;
  height: 50px;
  cursor: url(${cursor}), auto;
  &::after {
    display: none;
  }
  &.disabled {
    opacity: 0.35;
    pointer-events: none;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    ${({ type }) => (type === "left" ? "left: 0;" : "right: 0;")}
  }
`;

export default SwiperButton;
