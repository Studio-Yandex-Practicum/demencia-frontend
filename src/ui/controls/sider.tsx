import React, { useEffect } from "react";
import { ReactNode } from "react";
import styled, { DefaultTheme, ThemeProps } from "styled-components";
import { Button, IconBurger, IconClose, Overlay } from ".";
import {
  ButtonShape,
  ButtonType,
  PaletteColor,
  ScreenSize,
  TypographyLevel,
} from "../types";
import { ButtonProps, LinkButton } from "./button";

const SiderNav = styled.nav<{ isVisible: boolean; alignRight: boolean }>`
  display: ${(p) => (!p.isVisible ? "none" : "block")};
  position: fixed;
  top: 0;
  bottom: 0;
  max-width: 300px;
  width: 100%;
  overflow: hidden;
  ${(p) => (!p.alignRight ? "left" : "right")}: 0;
  transform: translate(0, 0);
  z-index: 999999;
  transition: transform ease-in-out 0.3s;
  background-color: ${PaletteColor.White};
`;

const SiderBtn = styled(Button).attrs(
  (props: ThemeProps<DefaultTheme> & ButtonProps) => ({
    type: ButtonType.Primary,
    shape: ButtonShape.Circle,
    level: TypographyLevel.Subtitle3,
    textColor: PaletteColor.White,
    ...props,
  })
)`
  position: fixed;
  top: 20px;
  right: 15px;
`;

const SiderCloseBtn = styled(LinkButton)`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 999999;
`;

const SiderContainer = styled.div`
  box-sizing: border-box;
  padding: 48px 40px 38px;
  position: relative;
  height: 100%;
`;
export interface SiderProps {
  children?: ReactNode;
}

export const Sider: React.FC<SiderProps> = (props) => {
  const [opened, setOpened] = React.useState(false);
  function toggleNav() {
    setOpened(!opened);
  }

  function close(): void {
    setOpened(false);
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <SiderBtn onClick={toggleNav}>
        <IconBurger fillColor={PaletteColor.White} />
      </SiderBtn>
      <SiderNav isVisible={opened} alignRight={true}>
        <SiderCloseBtn onClick={close}>
          <IconClose height={24}></IconClose>
        </SiderCloseBtn>
        <SiderContainer>{props.children}</SiderContainer>
      </SiderNav>
      <Overlay isOpened={opened}></Overlay>
    </>
  );
};
