import styled, { DefaultTheme } from "styled-components";
import { FontSize } from "../types/font-size.enum";
import { typographySizeMixIn } from "./typography";

interface ButtonProps {
  theme: DefaultTheme;
  fullWidth: boolean;
}

export const Button = styled.button.attrs((props: ButtonProps) => ({
  ...props,
}))`
  display: inline-block;
  margin: auto;
  border: none;
  text-align: center;
  text-decoration: none;
  cursor: url("../../images/cursor_pointer.svg"), pointer;
  font-family: ${(p) => p.theme.layout.fontFamily};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => (p.fullWidth ? "100%" : "auto")};
  gap: ${(p) => p.theme.layout.defaultSpacing * 2}px;
  border-radius: ${(p) => p.theme.layout.borderRadius}px;
  color: ${(p) => p.theme.button.color};
  background-color: ${(p) => p.theme.button.backgroundColor};
  ${(p) => typographySizeMixIn({ theme: p.theme, size: FontSize.Medium })}
`;
