import { gql } from "@apollo/client";

const GET_PARTNERS = gql`
  query getPartners {
    partners {
      id
      isActive
      name
      image
      url
    }
  }
`;

export { GET_PARTNERS };
