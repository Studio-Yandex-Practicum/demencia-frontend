import { gql } from "@apollo/client";

const GET_CENTERS = gql`
  query getCenters($city: String!) {
    centers(city: $city) {
      city
      address
      phoneNo
    }
  }
`;

export { GET_CENTERS };
