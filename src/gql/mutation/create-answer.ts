import { gql } from "@apollo/client";

const CREATE_ANSWER = gql`
  mutation createAnswer($input: AnswerInput!) {
    createAnswer(input: $input) {
      answer {
        id
      }
      ok
    }
  }
`;

export { CREATE_ANSWER };
