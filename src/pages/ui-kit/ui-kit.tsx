import React from "react";
import { TextBlock } from "../../ui/controls/typography";
import { FontSize } from "../../ui/types";
// TODO: this is a temporary page to display the ui components
const UiKitPage: React.FC = () => {
  return (
    <div>
      <header></header>
      <main>
        <h1>This is a page to display the low - level components and styles</h1>
        <TextBlock size={FontSize.Huge} renderTag={"h2"}>
          This is a huge text
        </TextBlock>
        <TextBlock size={FontSize.Large}>This is a large text</TextBlock>
        <TextBlock size={FontSize.Medium}>This is medium text</TextBlock>
        <TextBlock size={FontSize.Default}>This is text</TextBlock>
      </main>
      <footer></footer>
    </div>
  );
};

export default UiKitPage;
