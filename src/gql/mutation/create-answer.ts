import { gql } from "@apollo/client";

const CREATE_ANSWER = gql`
  mutation createAnswer($input: AnswerInput!) {
    createAnswer(input: $input) {
      ok
    }
  }
`;

const CREATE_ANSWER_FOR_CLOSE_PERSON = gql`
  mutation createAnswer($input: AnswerInput!) {
    createAnswer(input: $input, forClosePerson: true) {
      ok
    }
  }
`;

export { CREATE_ANSWER, CREATE_ANSWER_FOR_CLOSE_PERSON };
