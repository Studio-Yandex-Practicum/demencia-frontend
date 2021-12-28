import { Title } from "../controls/typography";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args}>Что нового?</Title>
);

export const DefaultTitle = Template.bind({});
DefaultTitle.args = {};

export const InvertedTitle = Template.bind({});
InvertedTitle.args = { textColor: "accent1" };
