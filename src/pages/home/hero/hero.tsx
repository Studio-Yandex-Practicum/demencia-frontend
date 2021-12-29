import React from "react";
import styled from "styled-components";
import Test from "./test/test";
import Slider from "./slider/slider";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 280px repeat(2, minmax(320px, 1fr));
  max-width: 1920px;
  margin-right: 32px;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

const HomePage: React.FC = () => {
  return (
    <Grid>
      <Test />
      <Slider />
    </Grid>
  );
};

export default HomePage;
