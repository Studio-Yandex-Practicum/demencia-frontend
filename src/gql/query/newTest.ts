import { gql } from "@apollo/client";

const NEW_TEST = gql`
  query newTest {
    newTest
  }
`;

export { NEW_TEST };
