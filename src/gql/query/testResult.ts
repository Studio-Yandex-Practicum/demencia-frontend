import { gql } from "@apollo/client";

const GET_TEST_RESULT = gql`
  query getTestResult($id: ID!) {
    testResult(id: &id)
  }
`;

export { GET_TEST_RESULT };
