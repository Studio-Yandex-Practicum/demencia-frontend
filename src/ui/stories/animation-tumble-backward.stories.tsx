import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TumbleBackward } from "../controls/animation";
import { AnimationSpeed } from "../types";
import greenPuzzleImage from "../../images/figures/test_green_puzzle.svg";
import styled from "styled-components";

export default {
  title: "Animation - TumbleBackward",
  component: TumbleBackward,
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
    speed: {
      name: "speed",
      description: "Скорость вращения",
      defaultValue: undefined,
      options: [
        AnimationSpeed.VerySlow,
        AnimationSpeed.Slower,
        AnimationSpeed.Slow,
        AnimationSpeed.Medium,
        AnimationSpeed.MediumFast,
        AnimationSpeed.MediumFaster,
        AnimationSpeed.Fast,
        AnimationSpeed.VeryFast,
      ],
      control: "select",
    },
  },
} as ComponentMeta<typeof TumbleBackward>;

const FigurePuzzle = styled.div`
  width: 48px;
  height: 56px;
  background: url(${greenPuzzleImage});
  background-repeat: no-repeat;
  background-size: contain;
`;

const Template: ComponentStory<typeof TumbleBackward> = (args) => (
  <TumbleBackward {...args}>
    <FigurePuzzle></FigurePuzzle>
  </TumbleBackward>
);

export const Default = Template.bind({});
Default.args = { speed: AnimationSpeed.Slow };
