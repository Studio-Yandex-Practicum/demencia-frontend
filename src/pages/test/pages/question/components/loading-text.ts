import styled from "styled-components";
import { Text1 } from "../../../../../ui/controls";
import {
  ScreenSize,
  TextColor,
  TypographyLevel,
} from "../../../../../ui/types";

const LoadingText = styled(Text1).attrs(() => ({
  level: TypographyLevel.Subtitle1,
  textColor: TextColor.Accent1,
}))`
  text-align: center;
  margin: 0 auto;
  font-size: 30px;
  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 20px;
  }
`;

export default LoadingText;
