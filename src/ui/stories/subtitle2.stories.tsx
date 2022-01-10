import { Subtitle2 } from "../controls/typography";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Subtitle2",
  component: Subtitle2,
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
} as ComponentMeta<typeof Subtitle2>;

const Template: ComponentStory<typeof Subtitle2> = (args) => (
  <Subtitle2 {...args}>Внимание, Восприятие </Subtitle2>
);

export const Default = Template.bind({});
Default.args = {};
