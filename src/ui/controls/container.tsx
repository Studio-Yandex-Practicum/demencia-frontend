import styled, { DefaultTheme, ThemeProps } from "styled-components";
import { ContainerSize } from "../types";
import { BackgroundColor } from "../types/background-color.enum";

export interface BackgroundColorProps {
  bgColor?: BackgroundColor;
}
export interface ContainerProps extends BackgroundColorProps {
  size?: ContainerSize;
}
export const colorMixIn = (
  props: ThemeProps<DefaultTheme> & BackgroundColorProps
): string => {
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
  //margin: 0 auto;
  ${(p) => (!!p.size ? `max-width: ${p.size}px` : "")};
  ${colorMixIn};
`;

export default Container;
