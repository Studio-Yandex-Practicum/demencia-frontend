import { gql } from "@apollo/client";

const GET_CENTERS = gql`
  query getCenters($city: String!) {
    centers(city: $city) {
      city
      address
      phoneNo
      phoneNoSecondary
      description
      openingHours
    }
  }
`;

export { GET_CENTERS };
