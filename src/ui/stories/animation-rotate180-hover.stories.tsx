import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Rotate180OnHover } from "../controls/animation";
import { AnimationSpeed } from "../types";
import greenPuzzleImage from "../../images/figures/test_green_puzzle.svg";
import styled from "styled-components";

export default {
  title: "Animation - Rotate 180 On Hover",
  component: Rotate180OnHover,
  argTypes: {
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    ref: { table: { disable: true } },
  },
} as ComponentMeta<typeof Rotate180OnHover>;

const FigurePuzzle = styled.div`
  width: 48px;
  height: 56px;
  background: url(${greenPuzzleImage});
  background-repeat: no-repeat;
  background-size: contain;
`;

const Template: ComponentStory<typeof Rotate180OnHover> = (args) => (
  <Rotate180OnHover {...args}>
    <FigurePuzzle></FigurePuzzle>
  </Rotate180OnHover>
);

export const Default = Template.bind({});
Default.args = {};
