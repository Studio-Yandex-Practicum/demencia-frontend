import React from "react";
import Hero from "./hero/hero";
import InfoSection from "./info-section/info-section";
import Map from "./map/map";
import News from "./news/news";
import AboutFundSection from "./about-fund-section/about-fund-section";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <InfoSection />
      <News />
      <Map />
      <AboutFundSection />
      <div>Sponsors block</div>
    </>
  );
};

export default HomePage;
