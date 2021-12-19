import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticlePage, HomePage, NewsGridPage } from "../../pages";
import styles from "./app.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.page}>
        <Header />
        <main className={styles.content}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news-grid" element={<NewsGridPage />} />
            <Route path="/article" element={<ArticlePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
