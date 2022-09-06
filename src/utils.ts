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
