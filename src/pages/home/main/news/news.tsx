import React from "react";
import { Link } from "react-router-dom";

const News: React.FC = () => {
  return (
    <section>
      <h2>Что нового?</h2>
      <Link to="news-grid">Перейти к ленте новостей</Link>
      <div />
      <div />
      {/* Slider */}
    </section>
  );
};

export default News;
