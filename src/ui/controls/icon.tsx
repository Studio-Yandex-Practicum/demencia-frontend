import React from "react";
import styled, { DefaultTheme, ThemeProps } from "styled-components";
import { PaletteColor } from "../types";
import { FontColorProps, getTextSelectedColor } from "./mixins";

interface IconProps {
  height?: number;
  fillColor?: string;
}

const BurgerSvg: React.FC<IconProps> = (props) => {
  const proportionScale = 2;
  const height = props.height || 14;
  const width = height * proportionScale;
  const color = props.fillColor || PaletteColor.Black;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.04999 4.28003C1.51955 4.28003 1.01085 4.06931 0.635773 3.69424C0.2607 3.31917 0.0499878 2.81046 0.0499878 2.28003C0.0499878 1.7496 0.2607 1.24089 0.635773 0.865814C1.01085 0.490741 1.51955 0.280029 2.04999 0.280029H47.88C48.4104 0.280029 48.9191 0.490741 49.2942 0.865814C49.6693 1.24089 49.88 1.7496 49.88 2.28003C49.88 2.81046 49.6693 3.31917 49.2942 3.69424C48.9191 4.06931 48.4104 4.28003 47.88 4.28003H2.04999Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.04999 14.22C1.51955 14.22 1.01085 14.0093 0.635773 13.6342C0.2607 13.2591 0.0499878 12.7504 0.0499878 12.22C0.0499878 11.6895 0.2607 11.1808 0.635773 10.8058C1.01085 10.4307 1.51955 10.22 2.04999 10.22H47.88C48.4104 10.22 48.9191 10.4307 49.2942 10.8058C49.6693 11.1808 49.88 11.6895 49.88 12.22C49.88 12.7504 49.6693 13.2591 49.2942 13.6342C48.9191 14.0093 48.4104 14.22 47.88 14.22H2.04999Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.04999 24.17C1.51955 24.17 1.01085 23.9593 0.635773 23.5843C0.2607 23.2092 0.0499878 22.7005 0.0499878 22.17C0.0499878 21.6396 0.2607 21.1309 0.635773 20.7558C1.01085 20.3808 1.51955 20.17 2.04999 20.17H47.88C48.4104 20.17 48.9191 20.3808 49.2942 20.7558C49.6693 21.1309 49.88 21.6396 49.88 22.17C49.88 22.7005 49.6693 23.2092 49.2942 23.5843C48.9191 23.9593 48.4104 24.17 47.88 24.17H2.04999Z"
        fill={color}
      />
    </svg>
  );
};

const CloseSvg: React.FC<IconProps> = (props) => {
  const proportionScale = 1;
  const height = props.height || 23;
  const width = height * proportionScale;
  const color = props.fillColor || PaletteColor.Black;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 23"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="none" strokeWidth="1" fill={color} fillRule="evenodd">
        <rect
          transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) "
          x="10.3137085"
          y="-3.6862915"
          width="2"
          height="30"
        ></rect>
        <rect
          transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) "
          x="10.3137085"
          y="-3.6862915"
          width="2"
          height="30"
        ></rect>
      </g>
    </svg>
  );
};

export const IconBurger = styled(BurgerSvg).attrs(
  (props: ThemeProps<DefaultTheme> & FontColorProps & IconProps) => ({
    fillColor: getTextSelectedColor(props),
    ...props,
  })
)``;

export const IconClose = styled(CloseSvg).attrs(
  (props: ThemeProps<DefaultTheme> & FontColorProps & IconProps) => ({
    fillColor: getTextSelectedColor(props),
    ...props,
  })
)``;
