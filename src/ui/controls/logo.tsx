import styled, { css } from "styled-components";
import cursorImage from "../../images/cursor_pointer.svg";
import logoImage from "../../images/logo.svg";

interface LogoBlockProps {
  maxWidth?: number;
  altText: string;
  link: string;
}

// todo: logo size think of
export const Logo = styled.img`
  background-size: cover;
  background-repeat: no-repeat;
  cursor: url("${cursorImage}"), pointer;
  width: 318px;
  height: 238px;
  margin: 21px 0 0 150px;
`;

export const LogoBlock: React.FunctionComponent<LogoBlockProps> = (props) => {
  return (
    <a href={props.link} aria-label={props.altText}>
      <Logo src={logoImage} alt={props.altText} />
    </a>
  );
};
