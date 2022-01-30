import React from "react";
import Hero from "./hero/hero";
import InfoSection from "./info-section/info-section";
import Map from "./map/map";
import News from "./news/news";
import Partners from "./partners/partners";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <InfoSection />
      <News />
      <Map />
      <div>About block</div>
      <Partners />
    </>
  );
};

export default HomePage;
