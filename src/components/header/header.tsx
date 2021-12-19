import { Link } from "react-router-dom";
import Logo from "./logo";
import Menu from "./menu";
import VerticalMenu from "./vertical-menu";
import styled from "styled-components";
import React from "react";
import { useState } from "react";
import BurgerButton from "./burger-button";
import VerticalModal from "./vertical-modal";

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

const Header: React.FC = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  return (
    <Wrapper>
      <BurgerButton
        handleBurgerMenuOpen={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        isOpen={isBurgerMenuOpen}
      />
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <Menu />
        <VerticalModal
          isOpen={isBurgerMenuOpen}
          onClick={() => setIsBurgerMenuOpen(false)}
        >
          <Link to="/" onClick={() => setIsBurgerMenuOpen(false)}>
            <Logo />
          </Link>
          <VerticalMenu onClick={() => setIsBurgerMenuOpen(false)} />
        </VerticalModal>
      </Container>
    </Wrapper>
  );
};

export default Header;
