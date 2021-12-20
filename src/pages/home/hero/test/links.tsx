import { Link } from "react-router-dom";
import styled from "styled-components";
import cursorPointer from "../../../../images/cursor_pointer.svg";

const NavItem = styled.li`
  margin-left: 28px;
  @media screen and (max-width: 1400px) {
    margin-left: 18px;
  }
  @media (min-width: 768px) and (max-width: 900px) {
    margin-left: 0px;
  }
`;

const LINK = styled.div`
  a {
    margin-top: 13px;
    line-height: 7px;
    font-size: 10px;
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 1.1px;
    display: inline-block;
    color: #2b2a29;
    transition: font-size 0.5s ease,
      border-bottom 0.5s cubic-bezier(0.2, -2, 0.8, 2);
    cursor: url(${cursorPointer}), pointer;
    &:hover {
      font-size: 11px;
    }
    @media screen and (max-width: 767px) {
      font-size: 8.5px;
      margin-top: 11px;
      line-height: 7.5px;
      &:hover {
        font-size: 9.5px;
      }
    }
  }
`;

interface Reference {
  title: string;
  target: string;
}
const test: Reference = {
  title: "ТЕСТ НА ДЕМЕНЦИЮ",
  target: "https://xn--d1acamsh7dwd.net/test/testUser/",
};
const map: Reference = {
  title: "ЦЕНТРЫ ПРОФИЛАКТИКИ",
  target: "map",
};
const article: Reference = {
  title: "ЗНАНИЯ",
  target: "article",
};
const links: Reference[] = [test, map, article];

export const renderLinks = links.map((link) => (
  <NavItem key={link.title}>
    <LINK>
      <Link to={link.target}>{link.title}</Link>
    </LINK>
  </NavItem>
));
