import React from "react";
import { renderLinks } from "../../utils/links";

const Menu: React.FC = () => {
  return (
    <nav>
      <ul>{renderLinks}</ul>
    </nav>
  );
};

export default Menu;
