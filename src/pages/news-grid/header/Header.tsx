import { Link } from "react-router-dom";
import LogoImage from "./Logo-image";
import NavList from "./Nav-list";
import NavListItem from "./Nav-list-item";

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
