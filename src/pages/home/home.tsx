import React from "react";
import Hero from "./hero/hero";
import InfoSection from "./info-section/info-section";
import Map from "./map/map";
import News from "./news/news";
import { Settings } from "../../types/settings";

const HomePage: React.FC<{ settings: Settings }> = ({ settings }) => {
  return (
    <>
      <Hero />
      <InfoSection settings={settings} />
      <News />
      <Map />
      <div>About block</div>
      <div>Sponsors block</div>
    </>
  );
};

export default HomePage;
