import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box, ThreeColumnSection } from "../controls";
import { SeparatedColumn } from "../controls";
import { Subtitle2, Text2 } from "../controls/typography";

const boxOptionValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default {
  title: "Three-Column Section",
  component: ThreeColumnSection,
  subcomponents: { SeparatedColumn, Subtitle2, Text2, Box },
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    m: {
      name: "m",
      description: "Paзмер поля кратно 8px",
      defaultValue: 0,
      options: boxOptionValues,
      control: "select",
    },
    mt: {
      name: "mt",
      defaultValue: 0,
      options: boxOptionValues,
      control: "select",
    },
    mb: {
      name: "mb",
      defaultValue: 0,
      options: boxOptionValues,
      control: "select",
    },
    ml: {
      name: "ml",
      defaultValue: 0,
      options: boxOptionValues,
      control: "select",
    },
    mr: {
      name: "mr",
      defaultValue: 0,
      options: boxOptionValues,
      control: "select",
    },
    p: {
      name: "p",
      description: "Paзмер отступа кратно 8px",
      defaultValue: 0,
      options: boxOptionValues,
      control: "select",
    },
    pt: {
      name: "pt",
      description: "Paзмер отступа сверху кратно 8px",
      defaultValue: 0,
      options: boxOptionValues,
      control: "select",
    },
    pb: {
      name: "pb",
      description: "Paзмер отступа снизу кратно 8px",
      defaultValue: 0,
      options: boxOptionValues,
      control: "select",
    },
    pl: {
      name: "pl",
      description: "Paзмер отступа слева кратно 8px",
      defaultValue: 0,
      options: boxOptionValues,
      control: "select",
    },
    pr: {
      name: "pr",
      description: "Paзмер отступа справа кратно 8px",
      defaultValue: 0,
      options: boxOptionValues,
      control: "select",
    },
  },
} as ComponentMeta<typeof ThreeColumnSection>;

const Template: ComponentStory<typeof ThreeColumnSection> = () => (
  <ThreeColumnSection>
    <SeparatedColumn>
      <Subtitle2>3х колоночная секция: 1ая колонка</Subtitle2>
      <Box mb={2}>
        <Text2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue
          imperdiet justo, eget egestas urna. Nulla suscipit facilisis semper.
          Cras tincidunt turpis in nulla efficitur, nec vulputate lectus
          hendrerit. Donec et neque eu dui dapibus gravida. Pellentesque non
          justo a tortor maximus placerat. Pellentesque porttitor id justo at
          finibus. Mauris non libero eleifend, aliquet nunc eget, ornare ipsum.
          Vivamus facilisis quis arcu et varius. Morbi commodo nisi et ante
          feugiat, quis egestas lacus fringilla. Curabitur pellentesque, ante ut
          vehicula feugiat, nisi odio sodales nunc, a malesuada diam ante sed
          nibh. Nam scelerisque, odio nec malesuada varius, sem erat pulvinar
          neque, id sodales nisl mi ut velit. Nulla tincidunt arcu vitae nibh
          accumsan, vel placerat ligula placerat. Nam feugiat tortor quis nulla
          ullamcorper rhoncus.
        </Text2>
      </Box>
    </SeparatedColumn>
    <SeparatedColumn>
      <Subtitle2>3х колоночная секция: 2ая колонка</Subtitle2>
      <Box mb={2}>
        <Text2>
          Aenean facilisis sed nibh at iaculis. Fusce molestie, nunc eu egestas
          ornare, tellus diam dapibus erat, eget suscipit tortor risus vel sem.
          Nullam ut enim a neque feugiat euismod. Suspendisse vestibulum enim
          vitae turpis blandit congue. Nam porttitor pretium nisi, quis placerat
          libero aliquet eu. Sed pretium, augue sed tincidunt laoreet, dolor
          sapien vestibulum sem, eu sagittis ex arcu rhoncus massa. Quisque
          placerat, quam ac placerat laoreet, dolor leo imperdiet erat, eu
          pulvinar augue nibh vel nibh. Praesent tincidunt, massa ut suscipit
          placerat, ex mauris placerat lacus, vel commodo dolor magna id velit.
          Phasellus bibendum quis mauris tempus suscipit.
        </Text2>
      </Box>
    </SeparatedColumn>
    <SeparatedColumn>
      <Subtitle2>3х колоночная секция: 3я колонка</Subtitle2>
      <Box mb={2}>
        <Text2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue
          imperdiet justo, eget egestas urna. Nulla suscipit facilisis semper.
          Cras tincidunt turpis in nulla efficitur, nec vulputate lectus
          hendrerit. Donec et neque eu dui dapibus gravida. Pellentesque non
          justo a tortor maximus placerat. Pellentesque porttitor id justo at
          finibus. Mauris non libero eleifend, aliquet nunc eget, ornare ipsum.
          Vivamus facilisis quis arcu et varius. Morbi commodo nisi et ante
          feugiat, quis egestas lacus fringilla. Curabitur pellentesque, ante ut
          vehicula feugiat, nisi odio sodales nunc, a malesuada diam ante sed
          nibh. Nam scelerisque, odio nec malesuada varius, sem erat pulvinar
          neque, id sodales nisl mi ut velit. Nulla tincidunt arcu vitae nibh
          accumsan, vel placerat ligula placerat. Nam feugiat tortor quis nulla
          ullamcorper rhoncus.
        </Text2>
      </Box>
    </SeparatedColumn>
  </ThreeColumnSection>
);

export const Default = Template.bind({});
Default.args = {};
