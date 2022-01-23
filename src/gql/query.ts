import { gql } from "@apollo/client";

const GET_LEFT_MENU_ITEMS = gql`
  query getLeftMenuItems {
    leftMenuElements {
      isActive
      name
      url
    }
  }
`;

const GET_NEWS_ARTICLES = gql`
  query getNewsArticles {
    newsArticles {
      id
      image
      title
      subTitle
      createdAt
      url
      isActive
    }
  }
`;

const GET_META_SETTINGS = gql`
  query getMetaSettings {
    settings {
      id
      siteName
      metaDescription
    }
  }
`;

export { GET_LEFT_MENU_ITEMS, GET_NEWS_ARTICLES, GET_META_SETTINGS };
