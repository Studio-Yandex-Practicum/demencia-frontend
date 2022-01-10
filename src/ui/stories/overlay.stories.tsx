import { Overlay } from "../controls";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Overlay",
  component: Overlay,
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    isVisible: {
      name: "isVisible",
      description: "Значение указывает, видим ли overlay",
      defaultValue: false,
      options: [true, false],
      control: "boolean",
    },
  },
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => (
  <Overlay {...args}></Overlay>
);

export const Default = Template.bind({});
Default.args = { isVisible: true };
