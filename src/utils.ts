export default function textEllipsis(text: string, limit: number) {
  if (text && limit && text.length > limit) {
    return `${text.substring(0, limit)}...`;
  }
  return text;
}
