export default function textEllipsis(text: string, limit: number) {
  if (text && limit) {
    return text.length > limit && `${text.substring(0, limit)}...`;
  }
  return text;
}
