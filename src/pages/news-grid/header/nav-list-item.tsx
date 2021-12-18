import { Link } from "react-router-dom";

interface INavListItem {
  linkTo: string;
  linkText: string;
}

const NavListItem: React.FC<INavListItem> = ({ linkTo, linkText }) => {
  return (
    <li className="header__links-element">
      <Link to={linkTo} className="header__link header__link_page_news">
        {linkText}
      </Link>
    </li>
  );
};

export default NavListItem;
