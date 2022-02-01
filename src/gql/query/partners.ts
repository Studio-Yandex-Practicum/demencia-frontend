import { gql } from "@apollo/client";

const GET_PARTNERS = gql`
  query getPartners {
    partners {
      id
      name
      image
      url
    }
  }
`;

export { GET_PARTNERS };
