import { gql } from "@apollo/client";

const GET_LEFT_MENU_ITEMS = gql`
  query getLeftMenuItems {
    leftMenuElements {
      name
      url
    }
  }
`;

export { GET_LEFT_MENU_ITEMS };
