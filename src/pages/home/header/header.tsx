import React from "react";
import { Link } from "react-router-dom";
import { home, renderLinks } from "./links";
import Burger from "./burger";

const Header: React.FC = () => {
  return (
    <header>
      <button type="button" />
      <div>
        <Link to={home.target}>
          <img src="./images/logo.svg" alt="логотип" />
        </Link>
        <nav>
          <ul>{renderLinks}</ul>
        </nav>
      </div>
      <Burger />
    </header>
  );
};

export default Header;
