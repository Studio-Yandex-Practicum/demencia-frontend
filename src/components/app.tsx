import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticlePage, HomePage, NewsGridPage, DetailsPage } from "../pages";
// TODO: Remove this temporary page.
import UIKitPage from "../pages/ui-kit/ui-kit";
import { Layout } from "../ui/controls";
import PageHeader from "./page-header";
import { Main } from "../ui/controls";
import PageFooter from "./page-footer";
import GraphqlTestPage from "../pages/graphql/graphql";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import { useQuery } from "@apollo/client";
import { MetaSettingsData } from "../types/meta-settings";
import { GET_META_SETTINGS } from "../gql/query/meta-settings";
import { DEFAULT_SITE_NAME } from "../constants";

const App: React.FC = () => {
  let { data: metaData } = useQuery<MetaSettingsData>(GET_META_SETTINGS, {
    fetchPolicy: "cache-first",
  });

  if (!metaData) {
    metaData = {
      settings: {
        metaDescription: "",
        siteName: DEFAULT_SITE_NAME,
      },
    };
  }

  const metaSettingsData = metaData.settings;

  return (
    <>
      <Helmet>
        <meta name="description" content={metaSettingsData.metaDescription} />
        <title>{metaSettingsData.siteName}</title>
      </Helmet>
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
    </>
  );
};

export default App;
