import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import cursorPointer from "../../images/cursor_pointer.svg";

const Item = styled.li`
  margin-left: 14px;
`;

const ItemLink = styled(Link)`
  text-decoration: none;
  cursor: url(${cursorPointer}), pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22.98px;
  color: black;
  transition: border-bottom 0.5s cubic-bezier(0.2, -2, 0.8, 2);

  &:hover {
    font-size: 21px;
    border-bottom: 2px solid #6d097a;
  }
`;

interface MenuItemProps {
  linkTo: string;
  linkText: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ linkTo, linkText }) => {
  return (
    <Item>
      <ItemLink to={linkTo}>{linkText}</ItemLink>
    </Item>
  );
};

export default MenuItem;
