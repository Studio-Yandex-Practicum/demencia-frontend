import { css } from "styled-components";
import cursorImage from "../../images/cursor_pointer.svg";

export const cursorMixin = css`
  cursor: url("${cursorImage}"), pointer;
`;
