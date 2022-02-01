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
      urlLabel
    }
  }
`;

const GET_NEWS_ARTICLE = gql`
  query getNewsArticle($id: ID!) {
    newsArticle(id: $id) {
      id
      image
      title
      subTitle
      createdAt
      url
      text
    }
  }
`;

export { GET_NEWS_ARTICLES, GET_NEWS_ARTICLE };
