import { gql } from "@apollo/client";

const GET_MAIN_MENU_ITEMS = gql`
  query getMainMenuItems {
    mainMenuElements {
      id
      name
      url
    }
  }
`;

export { GET_MAIN_MENU_ITEMS };
