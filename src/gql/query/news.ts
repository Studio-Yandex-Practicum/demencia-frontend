import { gql } from "@apollo/client";

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
export { GET_NEWS_ARTICLES };
