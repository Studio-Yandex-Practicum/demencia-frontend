import { Button } from "../controls/button";
import { Box } from "../controls/box";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonShape, ButtonType, TextColor, TypographyLevel } from "../types";
import { BackgroundColor } from "../types/background-color.enum";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    borderSize: { table: { disable: true } },
    borderColor: { table: { disable: true } },
    type: {
      name: "type",
      description: "Вид кнопки",
      defaultValue: ButtonType.Primary,
      options: [
        ButtonType.Primary,
        ButtonType.Secondary,
        ButtonType.Link
      ],
      control: "select",
    },
    shape: {
      ame: "type",
      description: "Вид кнопки",
      defaultValue: ButtonShape.Default,
      options: [
        ButtonShape.Default,
        ButtonShape.Rounded,
        ButtonShape.Circle
      ],
      control: "select",
    },
    ghost: {
      name: "ghost",
      description:
        "Значение, задать кнонке прозрачный фон",
      defaultValue: false,
      options: [true, false],
      control: "boolean",
    },
    uppercase: {
      name: "uppercase",
      description:
        "Значение, задает возможность перевести текст в верхний регистр",
      defaultValue: true,
      options: [true, false],
      control: "boolean",
    },
    level: {
      name: "level",
      description: "Размер текста ссылки",
      defaultValue: TypographyLevel.Subtitle3,
      options: [
        TypographyLevel.MainTitle,
        TypographyLevel.Title,
        TypographyLevel.Subtitle1,
        TypographyLevel.Subtitle2,
        TypographyLevel.Subtitle3,
        TypographyLevel.Subtitle4,
        TypographyLevel.Text1,
        TypographyLevel.Text2,
        TypographyLevel.Text3,
        TypographyLevel.Text4,
        TypographyLevel.Footer,
      ],
      control: "select",
    },
    textColor: {
      name: "textColor",
      description: "Цвет текста ссылки",
      defaultValue: undefined,
      options: [
        undefined,
        TextColor.Primary,
        TextColor.Secondary,
        TextColor.Accent1,
        TextColor.Accent2,
        TextColor.Shadow,
      ],
      control: "select",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Пройти Тест</Button>
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {};

export const Large = Template.bind({});
Large.args = { uppercase: true, level: TypographyLevel.Subtitle2 };

export const Secondary = Template.bind({});
Secondary.args = { type: ButtonType.Secondary, ghost: true };

export const SecondaryColor = Template.bind({});
SecondaryColor.args = { type: ButtonType.Secondary };

export const Link = Template.bind({});
Link.args = { type: ButtonType.Link, level: TypographyLevel.Text1 };

export const Circle = Template.bind({});
Circle.args = { shape: ButtonShape.Circle};
