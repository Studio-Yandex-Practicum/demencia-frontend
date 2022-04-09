import { gql } from "@apollo/client";

const CREATE_ANSWER = gql`
  mutation createAnswer($input: AnswerInput!) {
    createAnswer(input: $input) {
      answer {
        id
        image
      }
      ok
    }
  }
`;

export { CREATE_ANSWER };
