import { Link } from "react-router-dom";
import Logo from "./logo";
import Menu from "./menu";
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

  const closeBurger = () => setIsBurgerMenuOpen(false);

  const content = (vertical: boolean) => {
    return (
      <>
        <Link to="/" onClick={vertical ? closeBurger : undefined}>
          <Logo />
        </Link>
        <Menu
          vertical={vertical || undefined}
          onClick={vertical ? closeBurger : undefined}
        />
      </>
    );
  };

  return (
    <Wrapper>
      <BurgerButton
        handleBurgerMenuOpen={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        isOpen={isBurgerMenuOpen}
      />
      <Container>
        {content(false)}
        <VerticalModal
          isOpen={isBurgerMenuOpen}
          onClick={() => setIsBurgerMenuOpen(false)}
        >
          {content(true)}
        </VerticalModal>
      </Container>
    </Wrapper>
  );
};

export default Header;
