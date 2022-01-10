import styled from "styled-components";
import { buildTransitionFaster } from "./mixins";

export const Overlay = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (!props.isVisible ? "none" : "block")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: ${(props) => (!props.isVisible ? -1 : 99999)};
  opacity: ${(props) => (!props.isVisible ? 0 : 1)};
  ${buildTransitionFaster("opacity")}
`;
