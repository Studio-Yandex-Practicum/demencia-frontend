import styled from "styled-components";
import { ColorType, ContainerSize } from "../types";
import { ThemeProps } from "./layout";

export interface ContainerProps {
  size?: ContainerSize;
  bgColor?: ColorType;
}

interface ColorProps extends ThemeProps {
  bgColor?: ColorType;
}

export const colorMixIn = (props: ColorProps): string => {
  if (!props.bgColor) {
    return "";
  }

  const { colors } = props.theme;
  switch (props.bgColor) {
    case ColorType.Default: {
      return `background-color: ${colors.default}`;
    }
    case ColorType.Primary: {
      return `background-color: ${colors.primary};
              color: ${colors.textSecondary}`;
    }
    case ColorType.Secondary: {
      return `background-color: ${colors.secondary};
              color: ${colors.textSecondary}`;
    }
    case ColorType.Accent: {
      return `background-color: ${colors.accent}`;
    }
    default: {
      return "";
    }
  }
};

// Flexbox container
const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  ${(p) => (!!p.size ? `max-width: ${p.size}px` : "")};
  ${colorMixIn};
`;

export default Container;
