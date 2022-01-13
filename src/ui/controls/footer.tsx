import styled from "styled-components";
import { ScreenSize } from "../types";

const Footer = styled.footer`
  width: 100%;
  min-height: 140px;
  background-color: ${(p) => p.theme.colors.background};
  display: flex;
  align-items: center;

  @media screen and (max-width: ${ScreenSize.Small}px) {
    min-height: 100px;
  }
`;

export default Footer;
