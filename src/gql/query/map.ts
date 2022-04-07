import { gql } from "@apollo/client";

const GET_REGIONS = gql`
  query getRegions {
    regions {
      id
      geocode
      centers {
        city
        address
        phoneNo
        phoneNoSecondary
      }
    }
  }
`;

export { GET_REGIONS };
