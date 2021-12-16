import React from "react";
import { Link } from "react-router-dom";
import { home, renderLinks } from "./links";

const Burger: React.FC = () => {
  return (
    <div>
      <div>
        <button type="button" />
        <div>
          <Link to={home.target}>
            <img src="./images/logo.svg" alt="логотип" />
          </Link>
          <nav>
            <ul>{renderLinks}</ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Burger;
