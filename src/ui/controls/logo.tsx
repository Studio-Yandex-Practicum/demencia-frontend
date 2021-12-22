import styled, { css } from "styled-components";
import logoImage from "../../images/logo.svg";
import { cursorMixin } from "./cursor";
import React from "react";

interface LogoBlockProps {
  maxWidth?: number;
  altText: string;
  link: string;
}

// todo: logo size think of
export const Logo = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  ${cursorMixin}
  width: 220px; // todo: move this to container
  height: 164px; // todo: move this to container
  margin: 0;
  padding: 0;
`;

export const LogoBlock: React.FC<LogoBlockProps> = (props) => {
  return (
    <a href={props.link} aria-label={props.altText}>
      <Logo src={logoImage} alt={props.altText} />
    </a>
  );
};
