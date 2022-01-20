import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticlePage, HomePage, NewsGridPage, DetailsPage } from "../pages";
// TODO: Remove this temporary page.
import UIKitPage from "../pages/ui-kit/ui-kit";
import { Layout } from "../ui/controls";
import PageHeader from "./page-header";
import { Main } from "../ui/controls/layout";
import PageFooter from "./page-footer";
import GraphqlTestPage from "../pages/graphql/graphql";
import { Toaster } from "react-hot-toast";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <PageHeader />
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news-grid" element={<NewsGridPage />} />
            <Route path="/article" element={<ArticlePage />} />
            <Route path="/ui-kit" element={<UIKitPage />} />
            <Route path="/details" element={<DetailsPage />} />
            <Route path="/graphql" element={<GraphqlTestPage />} />
          </Routes>
        </Main>
        <PageFooter />
        <Toaster />
      </Layout>
    </Router>
  );
};

export default App;
