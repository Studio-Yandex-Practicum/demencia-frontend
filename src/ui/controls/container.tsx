import styled from "styled-components";
import { ContainerSize } from "../types";
import { ThemeProps } from "./layout";
import { BackgroundColor } from "../types/background-color.enum";

export interface ContainerProps {
  size?: ContainerSize;
  bgColor?: BackgroundColor;
}

interface ColorProps extends ThemeProps {
  bgColor?: BackgroundColor;
}

export const colorMixIn = (props: ColorProps): string => {
  if (!props.bgColor) {
    return "";
  }

  const { colors } = props.theme;
  switch (props.bgColor) {
    case BackgroundColor.Alt1: {
      return `background-color: ${colors.backgroundAlt1};
              color: ${colors.textSecondary}`;
    }
    case BackgroundColor.Alt2: {
      return `background-color: ${colors.backgroundAlt2};
              color: ${colors.textSecondary}`;
    }
    case BackgroundColor.Alt3: {
      return `background-color: ${colors.backgroundAlt3};`;
    }
    default: {
      return `background-color: ${colors.background}`;
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
