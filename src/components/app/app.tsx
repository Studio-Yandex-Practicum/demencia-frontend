import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticlePage, HomePage, NewsGridPage } from "../../pages";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news-grid" element={<NewsGridPage />} />
        <Route path="/article" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
};

export default App;
