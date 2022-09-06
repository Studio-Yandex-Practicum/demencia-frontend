import {
  colorChangeOnHoverMixIn,
} from "../controls/mixins";
import { Link } from "../controls/link";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextColor, TypographyLevel } from "../types";

export default {
  title: "Link",
  component: Link,
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    borderSize: { table: { disable: true } },
    borderColor: { table: { disable: true } },
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
      defaultValue: TextColor.Primary,
      options: [
        TextColor.Primary,
        TextColor.Secondary,
        TextColor.Accent1,
        TextColor.Accent2,
        TextColor.Shadow,
      ],
      control: "select",
    },
    zoomTextOnHover: {
      name: "zoomTextOnHover",
      description:
        "Значение дает возможность включить увеличение текста при наведении мыши",
      defaultValue: true,
      options: [true, false],
      control: "boolean",
    },
    borderBottomOnHover: {
      name: "borderBottomOnHover",
      description:
        "Значение дает возможность показать нижнее подчеркивание при наведении мыши",
      defaultValue: true,
      options: [true, false],
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link to="/" {...args}>
    О деменции
  </Link>
);

export const Default = Template.bind({ colorChangeOnHoverMixIn });
Default.args = {};
