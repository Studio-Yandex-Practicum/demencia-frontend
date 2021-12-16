import { Link } from "react-router-dom";

interface Reference {
  id?: number;
  title?: string;
  target: string;
}
export const home: Reference = {
  id: 0,
  target: "/",
};
const info: Reference = {
  id: 1,
  title: "О ДЕМЕНЦИИ",
  target: "info",
};
const sponsors: Reference = {
  id: 2,
  title: "ПАРТНЕРЫ",
  target: "sponsors",
};
const news: Reference = {
  id: 3,
  title: "НОВОСТИ",
  target: "news-grid",
};
const fond: Reference = {
  id: 4,
  title: "О ФОНДЕ",
  target: "fond",
};
const map: Reference = {
  id: 5,
  title: "КОНТАКТЫ",
  target: "map",
};

const links: Reference[] = [info, sponsors, news, fond, map];

export const renderLinks = links.map((link) => (
  <li key={link.id}>
    <Link to={link.target}>{link.title}</Link>
  </li>
));
