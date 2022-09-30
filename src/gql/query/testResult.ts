import { gql } from "@apollo/client";

const GET_TEST_RESULT = gql`
  query getTestResult($id: ID!) {
    testResult(id: $id)
  }
`;

const GET_TEST_RESULT_FOR_CLOSE_PERSON = gql`
  query getTestResult($id: ID!) {
    testResult(id: $id, forClosePerson: true)
  }
`;

export { GET_TEST_RESULT, GET_TEST_RESULT_FOR_CLOSE_PERSON };
