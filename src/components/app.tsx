import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArticlePage, HomePage, NewsGridPage, DetailsPage } from "../pages";
// TODO: Remove this temporary page.
import UIKitPage from "../pages/ui-kit/ui-kit";
import { Layout, Section } from "../ui/controls";
import PageHeader from "./page-header";
import { Main } from "../ui/controls";
import PageFooter from "./page-footer";
import GraphqlTestPage from "../pages/graphql/graphql";
import { toast } from "react-hot-toast";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useQuery } from "@apollo/client";
import { SettingsData } from "../types/settings";
import { GET_SETTINGS } from "../gql/query/settings";
import { DEFAULT_SITE_NAME } from "../constants";
import { Subtitle3 } from "../ui/controls";
import ScrollToTop from "./scroll-to-top";
import TestPage from "../pages/test/for-myself/test";
import VideoCoursesPage from "../pages/videocourses/videocourses";
import TestForClosePersonPage from "../pages/test/for-close-person/test";

const App: React.FC = () => {
  const { loading, error, data } = useQuery<SettingsData>(GET_SETTINGS, {
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
    if (error) {
      toast.error(`${error}`, { id: "error" });
    } else if (!data || !data.settings) {
      toast.error("Не удалось получить настроек сайта", { id: "error" });
    }
  });

  if (loading) {
    return (
      <Section flex centered mt={5}>
        <Subtitle3>Загрузка...</Subtitle3>
      </Section>
    );
  }

  if (error) {
    return <div />;
  }

  if (!data || !data.settings) {
    return <div />;
  }

  if (data.settings.siteName === "") {
    data.settings.siteName = DEFAULT_SITE_NAME;
  }

  const settings = data.settings;

  return (
    <HelmetProvider>
      <Helmet>
        <meta name="description" content={settings.metaDescription} />
        <title>{settings.siteName}</title>
      </Helmet>
      <Router>
        <ScrollToTop />
        <Layout>
          <PageHeader />
          <Main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news-grid" element={<NewsGridPage />} />
              <Route path="/article/:id" element={<ArticlePage />} />
              <Route path="/ui-kit" element={<UIKitPage />} />
              <Route path="/details" element={<DetailsPage />} />
              <Route path="/graphql" element={<GraphqlTestPage />} />
              <Route path="/test/*" element={<TestPage />} />
              <Route
                path="/test-for-close-person/*"
                element={<TestForClosePersonPage />}
              />
              <Route path="/videocourses" element={<VideoCoursesPage />} />
            </Routes>
          </Main>
          <PageFooter />
        </Layout>
      </Router>
    </HelmetProvider>
  );
};

export default App;
