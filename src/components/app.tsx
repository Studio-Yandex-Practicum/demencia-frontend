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
import { SettingsData } from "../types/meta-settings";
import { GET_SETTINGS } from "../gql/query/meta-settings";
import { DEFAULT_SITE_NAME } from "../constants";

const App: React.FC = () => {
  let { data: options } = useQuery<SettingsData>(GET_SETTINGS, {
    fetchPolicy: "cache-first",
  });

  if (!options) {
    options = {
      settings: {
        metaDescription: "",
        siteName: DEFAULT_SITE_NAME,
        copyright: "",
        mainSectionButtonLabel: "",
        aboutSection: "",
        aboutSectionTerm: "",
        aboutSectionTermOpenLabel: "",
        aboutSectionTermCloseLabel: "",
        aboutSectionActionTitle: "",
        aboutSectionActionSubtitle: "",
        aboutSectionInfo: "",
        aboutSectionButtonLabel: "",
        newsSection: "",
        newsSectionUrlLabel: "",
        partnersSection: "",
        partnersSectionSubtitle: "",
        mapSection: "",
        mapSectionSubtitle: "",
        mapSectionInfo: "",
        fundSection: "",
        fundSectionInfo: "",
        fundSectionUrlLabel: "",
        fundSectionUrl: "",
      },
    };
  }

  const settingsData = options.settings;

  return (
    <>
      <Helmet>
        <meta name="description" content={settingsData.metaDescription} />
        <title>{settingsData.siteName}</title>
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
