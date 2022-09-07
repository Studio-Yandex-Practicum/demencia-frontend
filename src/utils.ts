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

export function setTestId(id: string, forClosePerson = false) {
  const key = forClosePerson ? "test-for-close-person-id" : "test_id";
  localStorage.setItem(key, id);
}
