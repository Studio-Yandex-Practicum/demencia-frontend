import { Link } from "react-router-dom";
import LogoImage from "./logo-image";
import NavList from "./nav-list";
import NavListItem from "./nav-list-item";

const Header: React.FC = () => {
  return (
    <header className="header header_page_news">
      <div className="header__container">
        <Link to="/">
          <LogoImage />
        </Link>
        <NavList>
          <NavListItem linkText="О ДЕМЕНЦИИ" linkTo="/" />
          <NavListItem linkText="ПАРТНЕРЫ" linkTo="/" />
          <NavListItem linkText="НОВОСТИ" linkTo="/" />
          <NavListItem linkText="О ФОНДЕ" linkTo="/" />
          <NavListItem linkText="КОНТАКТЫ" linkTo="/" />
        </NavList>
      </div>
    </header>
  );
};

export default Header;
