import styled from "styled-components";
import { Text1 } from "../../../../../ui/controls";
import { ScreenSize } from "../../../../../ui/types";

const ErrorText = styled(Text1)`
  text-align: center;
  color: red;
  margin: 0 auto;
  font-size: 30px;
  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 20px;
  }
`;

export default ErrorText;
