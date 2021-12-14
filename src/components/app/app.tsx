import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticlePage, HomePage, NewsGridPage } from "../../pages";
// TODO: Remove this temporary page.
import UIKitPage from "../../pages/ui-kit/ui-kit";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news-grid" element={<NewsGridPage />} />
        <Route path="/article" element={<ArticlePage />} />
        <Route path="/ui-kit" element={<UIKitPage />} />
      </Routes>
    </Router>
  );
};

export default App;
