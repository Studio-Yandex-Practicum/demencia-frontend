import React from "react";
import Hero from "./hero/hero";
import News from "./news/news";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <div>Info block</div>
      <News />
      <div>Map block</div>
      <div>About block</div>
      <div>Sponsors block</div>
    </>
  );
};

export default HomePage;
