import { NEW_TEST, NEW_TEST_FOR_CLOSE_PERSON } from "./gql/query/newTest";

export default function textEllipsis(text: string | undefined, limit: number) {
  if (text && limit && text.length > limit) {
    return `${text.substring(0, limit)}...`;
  }
  return text;
}

export function testBaseUrl(forClosePerson = false) {
  if (forClosePerson) {
    return "/test-for-close-person";
  }

  return "/test";
}

export function newTestQuery(forClosePerson = false) {
  if (forClosePerson) {
    return NEW_TEST_FOR_CLOSE_PERSON;
  }

  return NEW_TEST;
}

export function setTestId(id: string, forClosePerson = false) {
  const key = forClosePerson ? "test-for-close-person-id" : "test_id";
  localStorage.setItem(key, id);
}

export function getTestId(forClosePerson = false) {
  if (forClosePerson) {
    return localStorage.getItem("test-for-close-person-id");
  }

  return localStorage.getItem("test_id");
}

export function getTestNumber(number: number, forClosePerson = false) {
  if (forClosePerson) {
    return localStorage.getItem(`for-close-person-${number}`);
  }

  return localStorage.getItem(`${number}`);
}

export function setTestNumber(
  number: number,
  answer: string,
  forClosePerson = false
) {
  if (forClosePerson) {
    localStorage.setItem(`for-close-person-${number}`, answer);
    return;
  }
  localStorage.setItem(`${number}`, answer);
}
