import React from "react";
import { H1, P, TextBlock } from "../../ui/controls/typography";
import { FontSize } from "../../ui/types";
// TODO: this is a temporary page to display the ui components
const UiKitPage: React.FC = () => {
  return (
    <div>
      <header></header>
      <main>
        <H1 size={FontSize.Large}>
          This is a page to display the low - level components and styles
        </H1>
        <TextBlock size={FontSize.Huge} renderTag={"h2"}>
          This is a huge text
        </TextBlock>
        <TextBlock size={FontSize.Large}>This is a large text</TextBlock>
        <TextBlock size={FontSize.Medium}>This is medium text</TextBlock>
        <TextBlock size={FontSize.Default}>This is text</TextBlock>
        <hr></hr>
        <P>This is a paragraph text</P>
      </main>
      <footer></footer>
    </div>
  );
};

export default UiKitPage;
