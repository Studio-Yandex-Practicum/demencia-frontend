import styled from "styled-components";
import burgerImage from "../../images/burger-menu.svg";
import { ScreenSize } from "../types";
import { cursorMixin } from "./cursor";

export const BurgerButton = styled.button`
  display: none;
  z-index: 2;
  ${cursorMixin}
  alight-self: flex-end;

  @media screen and (max-width: ${ScreenSize.Large}px) {
    display: block;
    width: 49px;
    height: 33px;
    background-image: url("${burgerImage}");
    background-size: contain;
    background-color: transparent;
    background-repeat: no-repeat;
    position: fixed;
    top: 30px;
    right: 25px;
    border: none;
    padding: 0;
  }

  @media screen and (max-width: 639px) {
    width: 47px;
    height: 25px;
    top: 30px;
  }
`;

const Header = styled.header`
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export default Header;
