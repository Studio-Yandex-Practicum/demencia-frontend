import { Button } from "../controls/button";
import { Box } from "../controls/box";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonType, TypographyLevel } from "../types";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <>
    <Box p={2}>
      <Button uppercase level={TypographyLevel.Subtitle2} {...args}>
        Начать тестирование
      </Button>
    </Box>
    <Box p={2}>
      <Button uppercase {...args}>
        Пройти Тест
      </Button>
    </Box>
    <Box p={2}>
      <Button {...args}>Пройти Тест</Button>
    </Box>
    <Box p={2}>
      <Button ghost {...args}>
        Пройти Тест
      </Button>
    </Box>
  </>
);

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = { type: ButtonType.Secondary };
