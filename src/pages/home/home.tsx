import React from "react";
import Hero from "./hero/hero";
import Info from "./info/info";
import News from "./news/news";
import Map from "./map/map";
import About from "./about/about";
import Sponsors from "./sponsors/sponsors";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Info />
      <News />
      <Map />
      <About />
      <Sponsors />
    </>
  );
};

export default HomePage;
