import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  width: 100%;
  min-height: 140px;
  background-color: #ebecec;
  display: flex;
  align-items: center;
  max-width: 1920px;

  @media screen and (max-width: 767px) {
    min-height: 100px;
  }
`;

const Copyright = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 22.98px;
  margin: 0 0 0 25px;

  @media screen and (max-width: 767px) {
    font-size: 17px;
    margin-left: 15px;
  }
`;

const Footer: React.FC = () => {
  const currentDate = new Date();
  return (
    <Wrapper>
      <Copyright>
        &copy; {currentDate.getFullYear()} Благотворительный фонд «Память
        поколений»
      </Copyright>
    </Wrapper>
  );
};

export default Footer;
