import { Link } from "react-router-dom";
import Logo from "./logo";
import Menu from "./menu";
import styled from "styled-components";
import React from "react";
import burgerMenu from "../../images/burger-menu.svg";
import cursorPointer from "../../images/cursor_pointer.svg";

const Wrapper = styled.header`
  width: 100%;
  background: transparent;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const BurgerButton = styled.button`
  display: none;
  z-index: 456;
  cursor: url(${cursorPointer}), pointer;

  @media screen and (max-width: 1290px) {
    display: block;
    width: 49px;
    height: 33px;
    background-image: url(${burgerMenu});
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

const Header: React.FC = () => {
  return (
    <Wrapper>
      <BurgerButton />
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <Menu />
      </Container>
    </Wrapper>
  );
};

export default Header;
