const NavList: React.FC = ({ children }) => {
  return (
    <nav className="header__menu">
      <ul className="header__links header__links_page_news">{children}</ul>
    </nav>
  );
};

export default NavList;
