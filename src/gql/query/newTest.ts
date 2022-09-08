import { gql } from "@apollo/client";

const NEW_TEST = gql`
  query newTest {
    newTest
  }
`;

const NEW_TEST_FOR_CLOSE_PERSON = gql`
  query newTest {
    newTest(forClosePerson: true)
  }
`;

export { NEW_TEST, NEW_TEST_FOR_CLOSE_PERSON };
