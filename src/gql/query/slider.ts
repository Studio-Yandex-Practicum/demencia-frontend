import { gql } from "@apollo/client";

const GET_SLIDER_ITEMS = gql`
  query getSliderItems {
    sliders {
      id
      createdAt
      updatedAt
      title
      image
      url
      urlLabel
    }
  }
`;

export { GET_SLIDER_ITEMS };
