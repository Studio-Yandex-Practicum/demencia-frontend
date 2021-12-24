import { MainTitle } from "../controls/typography";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "MainTitle",
  component: MainTitle,
} as ComponentMeta<typeof MainTitle>;

const Template: ComponentStory<typeof MainTitle> = (args) => (
  <MainTitle {...args}>Новости</MainTitle>
);

export const Default = Template.bind({});
Default.args = {};
