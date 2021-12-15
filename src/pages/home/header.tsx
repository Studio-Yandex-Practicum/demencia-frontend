import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  interface Reference {
    id?: number;
    title?: string;
    ref: string;
  }

  const home: Reference = {
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
  const renderLinks = links.map((link) => (
    <li key={link.id}>
      <Link to={link.ref}>{link.title}</Link>
    </li>
  ));

  return (
    <header>
      <button />
      <div>
        <Link to={home.ref}>
          <img src="./images/logo.svg" alt="логотип" />
        </Link>
        <nav>
          <ul>{renderLinks}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
