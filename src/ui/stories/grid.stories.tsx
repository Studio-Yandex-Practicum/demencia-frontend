import { Grid } from "../controls";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const divStyles: React.CSSProperties = {
  height: "450px",
  backgroundColor: "#429E84",
};
const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <div style={divStyles}>Карточка новостей</div>
    <div style={divStyles}>Карточка новостей</div>
    <div style={divStyles}>Карточка новостей</div>
    <div style={divStyles}>Карточка новостей</div>
    <div style={divStyles}>Карточка новостей</div>
    <div style={divStyles}>Карточка новостей</div>
    <div style={divStyles}>Карточка новостей</div>
    <div style={divStyles}>Карточка новостей</div>
    <div style={divStyles}>Карточка новостей</div>
    <div style={divStyles}>Карточка новостей</div>
    <div style={divStyles}>Карточка новостей</div>
    <div style={divStyles}>Карточка новостей</div>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {};
