import { MainTitle } from "../controls/typography";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "MainTitle",
  component: MainTitle,
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
  },
} as ComponentMeta<typeof MainTitle>;

const Template: ComponentStory<typeof MainTitle> = (args) => (
  <MainTitle {...args}>Новости</MainTitle>
);

export const Default = Template.bind({});
Default.args = {};
