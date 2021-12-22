import React from "react";
import { TextColor, TypographyLevel } from "../types";
import { TextBlock, TextBlockProps } from "./typography";

export const MainTitle: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <TextBlock
      uppercase
      level={TypographyLevel.MainTitle}
      textColor={TextColor.Accent1}
      {...rest}
    >
      {children}
    </TextBlock>
  );
};

export const Title: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <TextBlock
      uppercase
      level={TypographyLevel.Title}
      textColor={TextColor.Accent2}
      {...rest}
    >
      {children}
    </TextBlock>
  );
};

export const Subtitle1: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <TextBlock
      uppercase
      level={TypographyLevel.Subtitle1}
      textColor={TextColor.Accent1}
      {...rest}
    >
      {children}
    </TextBlock>
  );
};

export const Subtitle2: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <TextBlock
      uppercase
      level={TypographyLevel.Subtitle2}
      textColor={TextColor.Accent1}
      {...rest}
    >
      {children}
    </TextBlock>
  );
};

export const Subtitle3: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <TextBlock
      uppercase
      level={TypographyLevel.Subtitle3}
      textColor={TextColor.Shadow}
      {...rest}
    >
      {children}
    </TextBlock>
  );
};

export const Subtitle4: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <TextBlock uppercase level={TypographyLevel.Subtitle4}>
      {children}
    </TextBlock>
  );
};

export const Text1: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <TextBlock level={TypographyLevel.Text1} {...rest}>
      {children}
    </TextBlock>
  );
};

export const Text2: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <TextBlock level={TypographyLevel.Text2} {...rest}>
      {children}
    </TextBlock>
  );
};

export const Text3: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <TextBlock
      level={TypographyLevel.Text3}
      textColor={TextColor.Shadow}
      {...rest}
    >
      {children}
    </TextBlock>
  );
};

export const Text4: React.FC<TextBlockProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <TextBlock level={TypographyLevel.Text4} {...rest}>
      {children}
    </TextBlock>
  );
};
