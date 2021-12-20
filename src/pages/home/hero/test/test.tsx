import React from "react";
import styled from "styled-components";
import NavMenu from "./menu";
import Decor from "./decor";
import StartBtn from "../../start-button/start-button";

const Section = styled.div`
  width: 100%;
  height: 465px;
  position: relative;
  @media screen and (max-width: 767px) {
    height: 403px;
  }
  @media screen and (max-width: 369px) {
    max-height: 391px;
  }
`;

const Test: React.FC = () => {
  return (
    <Section>
      <NavMenu />
      <Decor />
      <StartBtn />
    </Section>
  );
};

export default Test;
