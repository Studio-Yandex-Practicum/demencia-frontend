import { Link } from "react-router-dom";

interface Reference {
  id?: number;
  title?: string;
  ref: string;
}

export const home: Reference = {
  id: 0,
  ref: "/",
};
const info: Reference = {
  id: 1,
  title: "О ДЕМЕНЦИИ",
  ref: "info",
};
const sponsors: Reference = {
  id: 2,
  title: "ПАРТНЕРЫ",
  ref: "sponsors",
};
const news: Reference = {
  id: 3,
  title: "НОВОСТИ",
  ref: "news-grid",
};
const fond: Reference = {
  id: 4,
  title: "О ФОНДЕ",
  ref: "fond",
};
const map: Reference = {
  id: 5,
  title: "КОНТАКТЫ",
  ref: "map",
};

const links: Reference[] = [info, sponsors, news, fond, map];

export const renderLinks = links.map((link) => (
  <li key={link.id}>
    <Link to={link.ref}>{link.title}</Link>
  </li>
));
