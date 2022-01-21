import styled from "styled-components";
import { ScreenSize } from "../../../../../ui/types";
import cursor from "../../../../../images/cursor_pointer.svg";

export const StyledPagination = styled.div`
  position: absolute;
  text-align: center;
  transition: 0.3s opacity;
  transform: translate3d(0, 0, 0);
  z-index: 10;
  bottom: 10px;
  left: 0;
  width: 100%;
  @media (max-width: ${ScreenSize.Small}px) {
    bottom: 20% !important;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    bottom: 0 !important;
  }
`;

export const StyledBullet = styled.div`
  cursor: url(${cursor}), auto !important;
`;
