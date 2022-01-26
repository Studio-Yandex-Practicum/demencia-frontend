import React from "react";
import Hero from "./hero/hero";
import InfoSection from "./info-section/info-section";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <InfoSection />
      <div>News block</div>
      <div>Map block</div>
      <div>About block</div>
      <div>Sponsors block</div>
    </>
  );
};

export default HomePage;
