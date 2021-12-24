import styled from "styled-components";
import logoImage from "../../images/logo.svg";
import { cursorMixin } from "./cursor";
import React from "react";
import { ScreenSize } from "../types";
import { Link } from "./link";
import { LinkProps } from "react-router-dom";
import { BoxProps } from "./box";

interface LogoBlockProps extends BoxProps {
  maxWidth?: number;
  altText: string;
}

const logoLargeMaxWidth = 220;
const logoSmallMaxWidth = 150;
// todo: logo size think of
export const Logo = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  ${cursorMixin};
  width: ${logoLargeMaxWidth}px; // todo: move this to container size
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${ScreenSize.Small}px) {
    width: ${logoSmallMaxWidth}px;
  }
`;

export const LogoBlock: React.FC<LogoBlockProps & LinkProps> = (props) => {
  return (
    <Link to={props.to} aria-label={props.altText}>
      <Logo src={logoImage} alt={props.altText} />
    </Link>
  );
};
