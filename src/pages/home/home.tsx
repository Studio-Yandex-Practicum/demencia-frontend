import React from "react";
import Hero from "./hero/hero";
import Map from "./map/map";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <div>Info block</div>
      <div>News block</div>
      <Map />
      <div>About block</div>
      <div>Sponsors block</div>
    </>
  );
};

export default HomePage;
