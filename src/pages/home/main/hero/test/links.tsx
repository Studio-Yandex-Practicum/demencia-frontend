import { Link } from "react-router-dom";

interface Reference {
  id?: number;
  title?: string;
  ref: string;
}

export const test: Reference = {
  id: 0,
  title: "ПРОЙТИ ТЕСТ",
  ref: "/https://xn--d1acamsh7dwd.net/test/testUser/",
};
const testCopy: Reference = {
  id: 1,
  title: "ТЕСТ НА ДЕМЕНЦИЮ",
  ref: "https://xn--d1acamsh7dwd.net/test/testUser/",
};
const map: Reference = {
  id: 2,
  title: "ЦЕНТРЫ ПРОФИЛАКТИКИ",
  ref: "map",
};
const article: Reference = {
  id: 3,
  title: "ЗНАНИЯ",
  ref: "article",
};

const links: Reference[] = [testCopy, map, article];

export const renderLinks = links.map((link) => (
  <li key={link.id}>
    <Link to={link.ref}>{link.title}</Link>
  </li>
));
