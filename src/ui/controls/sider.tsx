import React, { useCallback, useEffect } from "react";
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
import { BoxProps, getBoxStyles } from "./box";
import { ButtonProps, LinkButton } from "./button";

const SiderNav = styled.nav<{ isVisible: boolean; alignRight: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  max-width: 300px;
  width: 100%;
  overflow: hidden;
  ${(p) => (!p.alignRight ? "left" : "right")}: 0;
  transform: translate(${(p) => (!p.isVisible ? "100%" : "0")}, 0);
  z-index: 999999;
  transition: transform ease-in-out 0.3s;
  background-color: ${PaletteColor.White};

  @media screen and (min-width: ${ScreenSize.Large - 1}px) {
    display: none;
  }
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

  @media screen and (min-width: ${ScreenSize.Large - 1}px) {
    display: none;
  }
`;

const SiderCloseBtn = styled(LinkButton)`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 999999;
`;

const SiderContainer = styled.div.attrs(
  (props: ThemeProps<DefaultTheme> & BoxProps) => ({
    pt: 6,
    pb: 5,
    pl: 5,
    pr: 5,
    ...props,
  })
)`
  box-sizing: border-box;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${getBoxStyles}
`;
export interface SiderProps {
  children?: ReactNode;
  closeOnNavigationChanged?: boolean;
}

export const Sider: React.FC<SiderProps> = (props) => {
  const [opened, setOpened] = React.useState(false);
  const siderNavRef = React.useRef<HTMLBaseElement>(null);

  function toggleNav() {
    setOpened(!opened);
  }

  const close = useCallback(() => {
    if (opened) {
      setOpened(false);
    }
  }, [opened]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [close]);

  // todo: move this to a separate hook if possible
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        siderNavRef.current &&
        !siderNavRef.current.contains(event.target as Node)
      ) {
        close();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [siderNavRef, close]);

  return (
    <>
      <SiderBtn onClick={toggleNav}>
        <IconBurger fillColor={PaletteColor.White} />
      </SiderBtn>
      <SiderNav isVisible={opened} alignRight={true} ref={siderNavRef}>
        <SiderCloseBtn onClick={close}>
          <IconClose height={24} />
        </SiderCloseBtn>
        <SiderContainer>{props.children}</SiderContainer>
      </SiderNav>
      <Overlay isVisible={opened} />
    </>
  );
};
