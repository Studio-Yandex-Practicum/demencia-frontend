import React from "react";
import logo from "../../images/logo.svg";
import styled from "styled-components";
import cursorPointer from "../../images/cursor_pointer.svg";

const LogoImage = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  cursor: url(${cursorPointer}), pointer;
  width: 318px;
  height: 238px;
  margin: 21px 0 0 150px;

  @media screen and (max-width: 1400px) {
    width: 172px;
    height: 130px;
    margin: 24px 0 0 110px;
  }

  @media screen and (max-width: 960px) {
    width: 172px;
    height: 130px;
    margin: 24px 0 0 45px;
  }

  @media screen and (max-width: 767px) {
    width: 141px;
    height: 107px;
    margin: 24px 0 0 35px;
  }

  @media screen and (max-width: 639px) {
    width: 124px;
    height: 92px;
    margin: 24px 0 0 25px;
  }
`;

const Logo: React.FC = () => {
  return <LogoImage src={logo} alt="логотип" />;
};

export default Logo;
