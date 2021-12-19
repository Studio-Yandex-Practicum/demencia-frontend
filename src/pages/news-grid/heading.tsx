import styled from "styled-components";

const Heading = styled.h1`
  margin: 0 0 70px;
  font-size: 86px;
  line-height: 1.15;
  font-weight: 800;
  font-style: normal;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  color: #6d097a;
  transition: all 1.5s ease;

  transform: translate(0px, 0px);
  opacity: 1;

  @media (max-width: 800px) {
    font-size: 64px;
  }

  @media (max-width: 600px) {
    font-size: 42px;
  }
`;

export default Heading;
