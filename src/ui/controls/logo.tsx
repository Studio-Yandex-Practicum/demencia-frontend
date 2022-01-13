import styled from "styled-components";
import logoImage from "../../images/logo.svg";
import { cursorMixin } from "./cursor";
import React from "react";
import { LogoSize, ScreenSize } from "../types";
import { Link } from "./link";
import { LinkProps } from "react-router-dom";
import { BoxProps } from "./box";

interface LogoBlockProps extends BoxProps {
  size?: LogoSize;
  altText: string;
}

const logoDefaultMaxWidth = 220;
const logoSmallMaxWidth = 120;
// todo: logo size think of
export const Logo = styled.img<{ size?: LogoSize }>`
  background-size: cover;
  background-repeat: no-repeat;
  ${cursorMixin};
  width: ${(p) =>
    !p.size && p.size === LogoSize.Small
      ? logoSmallMaxWidth
      : logoDefaultMaxWidth}px; // todo: move this to container size and use 100% container size
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${ScreenSize.Small}px) {
    width: ${logoSmallMaxWidth}px;
  }
`;

export const LogoBlock: React.FC<LogoBlockProps & LinkProps> = (props) => {
  return (
    <Link
      to={props.to}
      aria-label={props.altText}
      borderBottomOnHover={false}
      zoomTextOnHover={false}
    >
      <Logo src={logoImage} alt={props.altText} />
    </Link>
  );
};
