import { gql } from "@apollo/client";

const GET_META_SETTINGS = gql`
  query getMetaSettings {
    settings {
      siteName
      metaDescription
    }
  }
`;
export { GET_META_SETTINGS };
