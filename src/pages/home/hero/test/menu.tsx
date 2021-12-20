import React from "react";
import styled from "styled-components";
import { renderLinks } from "./links";

const NavMenu = styled.nav`
  position: absolute;
  top: 165px;
  left: 77px;
  z-index: 445;
  @media screen and (max-width: 767px) {
    top: 160px;
    left: 35px;
  }
  @media screen and (max-width: 670px) {
    top: 140px;
    left: 35px;
  }
  @media screen and (max-width: 639px) {
    top: 130px;
    left: 25px;
  }
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 30px 50px 0 0;
  @media screen and (max-width: 767px) {
    margin: 20px 20px 0 0;
  }
`;

const Menu: React.FC = () => {
  return (
    <NavMenu>
      <NavItems>{renderLinks}</NavItems>
    </NavMenu>
  );
};

export default Menu;
