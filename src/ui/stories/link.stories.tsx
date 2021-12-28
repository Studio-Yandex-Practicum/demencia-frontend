import {
  TextUppercaseProps,
  textUppercaseMixIn,
  colorChangeOnHoverMixIn,
} from "../controls/mixins";
import { Link } from "../controls/link";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => (
  <Link to="/" {...args}>
    О деменции
  </Link>
);

export const Default = Template.bind({ colorChangeOnHoverMixIn });
Default.args = {};
