import { gql } from "@apollo/client";

const GET_LEFT_MENU_ITEMS = gql`
  query getLeftMenuItems {
    leftMenuElements {
      isActive
      name
      url
    }
  }
`;
export { GET_LEFT_MENU_ITEMS };
