import React from "react";
import { MouseEvent } from "react";
import { useQuery } from "@apollo/client";
import { toast } from "react-hot-toast";
import { MainMenuData } from "../types/main-menu";
import { GET_MAIN_MENU_ITEMS } from "../gql/query/main-menu";
import {
  Box,
  Header,
  Link,
  LogoBlock,
  Menu,
  MenuItem,
  Nav,
  Sider,
  Subtitle3,
} from "../ui/controls";
import { useMatch } from "react-router-dom";
import BoxWithPuzzles from "./box-with-puzzles";
import styled from "styled-components";
import { ScreenSize } from "../ui/types";

function textEllipsis(t: string | undefined) {
  if (t !== undefined && t.length > 11) {
    return `${t.substring(0, 10)}...`;
  }
  return t;
}

const StyledBox = styled(Box)`
  margin-left: 32px;

  @media screen and (max-width: ${ScreenSize.Small}px) {
    margin-left: 16px;
  }
`;

const handleClickAnchorLink = (
  e: MouseEvent<HTMLAnchorElement>,
  url: string
) => {
  if (url?.[1] === "#") {
    const anchorElement = document.getElementById(url.slice(2));
    if (anchorElement) {
      e.preventDefault();
      window.scrollTo({
        top: anchorElement.offsetTop,
        behavior: "smooth",
      });
    }
  }
};

const DefaultMenu: React.FC<{ vertical?: boolean }> = (props) => {
  return (
    <Menu vertical={!!props.vertical}>
      <MenuItem>
        <Link
          to="/#info"
          onClick={(event) => handleClickAnchorLink(event, "/#info")}
        >
          О деменции
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          to="/#partners"
          onClick={(event) => handleClickAnchorLink(event, "/#partners")}
        >
          Партнеры
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/news-grid">Новости</Link>
      </MenuItem>
      <MenuItem>
        <Link
          to="/#about"
          onClick={(event) => handleClickAnchorLink(event, "/#about")}
        >
          О фонде
        </Link>
      </MenuItem>
    </Menu>
  );
};

const NavMenu: React.FC<{ vertical?: boolean }> = (props) => {
  const { data, loading, error } = useQuery<MainMenuData>(GET_MAIN_MENU_ITEMS, {
    fetchPolicy: "cache-first",
  });

  if (loading) {
    return (
      <Box>
        <Subtitle3>Загрузка...</Subtitle3>
      </Box>
    );
  }

  if (error) {
    toast.error(`Не удалось загрузить меню с сервера`, { id: "error" });
    return <DefaultMenu vertical={!!props.vertical} />;
  }

  if (!data || !data.mainMenuElements) {
    return <DefaultMenu vertical={!!props.vertical} />;
  }

  const items = data.mainMenuElements.filter((el) => el && el.name !== "");

  if (!items.length) {
    return <DefaultMenu vertical={!!props.vertical} />;
  }

  return (
    <Menu vertical={!!props.vertical}>
      {items.map((item) => (
        <MenuItem key={item.id} zoomOnHover>
          <Link
            to={item.url}
            zoomTextOnHover={false}
            onClick={(event) => handleClickAnchorLink(event, item.url)}
          >
            {textEllipsis(item.name)}
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );
};

const PageHeader: React.FC = () => {
  const questionMatch = useMatch("/test/question/*");
  const resultMatch = useMatch("/test/result");

  return (
    <Header>
      <StyledBox mt={3}>
        <LogoBlock altText="Логотип" to="/" />
      </StyledBox>
      <Box mt={4} mr={4}>
        <Nav>
          <NavMenu />
        </Nav>
        {questionMatch || resultMatch ? <BoxWithPuzzles /> : ""}
      </Box>
      <Sider>
        <LogoBlock altText={"Логотип"} to={"/"} />
        <Box mt={5}>
          <NavMenu vertical={true} />
        </Box>
      </Sider>
    </Header>
  );
};

export default PageHeader;
