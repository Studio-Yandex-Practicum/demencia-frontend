import { Link } from "react-router-dom";

export interface Reference {
  id?: number;
  title?: string;
  target: string;
}
export const test: Reference = {
  id: 0,
  title: "ПРОЙТИ ТЕСТ",
  target: "/https://xn--d1acamsh7dwd.net/test/testUser/",
};
const testCopy: Reference = {
  id: 1,
  title: "ТЕСТ НА ДЕМЕНЦИЮ",
  target: "https://xn--d1acamsh7dwd.net/test/testUser/",
};
const map: Reference = {
  id: 2,
  title: "ЦЕНТРЫ ПРОФИЛАКТИКИ",
  target: "map",
};
const article: Reference = {
  id: 3,
  title: "ЗНАНИЯ",
  target: "article",
};

const links: Reference[] = [testCopy, map, article];

export const renderLinks = links.map((link) => (
  <li key={link.id}>
    <Link to={link.target}>{link.title}</Link>
  </li>
));
