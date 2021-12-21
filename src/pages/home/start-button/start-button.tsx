import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cursorPointer from "../../../images/cursor_pointer.svg";
import semicircle from "../../../images/halfcirclegreen.png";

// styles for animation
// transform: translate(-70%, 0px);
// &:active {
//   transform: translate(0px, 0px);
// }

const Button = styled.div`
  display: flex;
  position: absolute;
  bottom: 51px;
  left: 70px;
  z-index: 303;
  transition: all 1.5s ease 0s;
  &:hover {
    transform: scale(1.2);
  }

  @media screen and (max-width: 767px) {
    bottom: 30px;
    left: 44px;
  }
  @media screen and (max-width: 660px) {
    bottom: 50px;
  }
  @media screen and (max-width: 639px) {
    bottom: 70px;
    left: 85px;
  }
  @media screen and (max-width: 369px) {
    bottom: 55px;
    left: 85px;
  }
`;

const LINK = styled.div`
  a {
    display: block;
    background-color: #6d097a;
    color: white;
    margin: auto;
    border-radius: 25px;
    font-weight: 400;
    border: none;
    text-align: center;
    text-decoration: none;
    cursor: url(${cursorPointer}), pointer;

    font-size: 16px;
    width: 167px;
    height: 40px;
    line-height: 42px;
    letter-spacing: 1px;
    transition: all 1s ease;
    padding-left: 5px;

    &:hover {
      transform: scale(1.1);
      box-shadow: 5px 5px 20px 2px grey;
    }

    @media screen and (max-width: 767px) {
      font-size: 13px;
      width: 145px;
      height: 34px;
      line-height: 34px;
    }
  }
`;

const Semicircle = styled.div`
  width: 42px;
  height: 88px;
  background: url(${semicircle});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 29px;
  left: 220px;
  z-index: 302;

  @media screen and (max-width: 767px) {
    width: 38px;
    height: 76px;
    bottom: 9px;
    left: 172px;
  }
  @media screen and (max-width: 660px) {
    bottom: 30px;
    left: 175px;
  }
  @media screen and (max-width: 639px) {
    bottom: 50px;
    left: 215px;
  }
  @media screen and (max-width: 369px) {
    bottom: 35px;
    left: 217px;
  }
`;

interface Reference {
  title: string;
  target: string;
}

const StartBtn: React.FC = (): JSX.Element => {
  const link: Reference = {
    title: "ПРОЙТИ ТЕСТ",
    target: "/https://xn--d1acamsh7dwd.net/test/testUser/",
  };

  return (
    <>
      <Button>
        <LINK>
          <Link to={link.target}>{link.title}</Link>
        </LINK>
      </Button>
      <Semicircle />
    </>
  );
};

export default StartBtn;
