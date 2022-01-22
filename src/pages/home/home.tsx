import React from "react";
import Hero from "./hero/hero";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <div>Info block</div>
      <div>News block</div>
      <div>Map block</div>
      <div>About block</div>
      <div>Sponsors block</div>
    </>
  );
};

export default HomePage;
