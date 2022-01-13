import { Title } from "../controls/typography";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Title",
  component: Title,
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    p: { table: { disable: true } },
    pt: { table: { disable: true } },
    pb: { table: { disable: true } },
    pl: { table: { disable: true } },
    pr: { table: { disable: true } },
    m: { table: { disable: true } },
    mt: { table: { disable: true } },
    mb: { table: { disable: true } },
    ml: { table: { disable: true } },
    mr: { table: { disable: true } },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args}>Что нового?</Title>
);

export const DefaultTitle = Template.bind({});
DefaultTitle.args = {};

export const InvertedTitle = Template.bind({});
InvertedTitle.args = { textColor: "accent1" };
