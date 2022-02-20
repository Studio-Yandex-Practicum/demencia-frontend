import styled from "styled-components";
import { ScreenSize } from "../types";

const Footer = styled.footer`
  width: 100%;
  min-height: 140px;
  background-color: ${(p) => p.theme.colors.background};
  display: flex;
  align-items: center;
  margin-left: 32px;
  margin-right: 32px;

  @media screen and (max-width: ${ScreenSize.Small}px) {
    min-height: 100px;
    margin-right: 16px;
    margin-left: 16px;
  }
`;

export default Footer;
