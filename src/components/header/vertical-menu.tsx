import styled from "styled-components";
import MenuItem from "./menu-item";

const VerticalMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  row-gap: 25px;
`;

interface VerticalMenuProps {
  onClick: () => void;
}

const VerticalMenu: React.FC<VerticalMenuProps> = ({ onClick }) => {
  return (
    <nav>
      <VerticalMenuItems>
        <MenuItem linkText="О ДЕМЕНЦИИ" linkTo="/#info" onClick={onClick} />
        <MenuItem linkText="ПАРТНЕРЫ" linkTo="/#sponsors" onClick={onClick} />
        <MenuItem linkText="НОВОСТИ" linkTo="/news-grid" onClick={onClick} />
        <MenuItem linkText="О ФОНДЕ" linkTo="/#about" onClick={onClick} />
        <MenuItem linkText="КОНТАКТЫ" linkTo="#" onClick={onClick} />
      </VerticalMenuItems>
    </nav>
  );
};

export default VerticalMenu;
