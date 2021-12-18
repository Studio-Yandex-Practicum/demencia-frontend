import React from "react";
import { Layout } from "../../ui/controls/layout";
import {
  H1,
  MainTitle,
  P,
  PrimaryTitle,
  SecondaryTitle,
  Subtitle,
  TextBlock,
} from "../../ui/controls/typography";
import { FontSize } from "../../ui/types";
// TODO: this is a temporary page to display the ui components
const UiKitPage: React.FC = () => {
  return (
    <Layout>
      <header></header>
      <main>
        <MainTitle>
          MainTitle: This is a page to display the low - level components and
          styles
        </MainTitle>
        <PrimaryTitle>This is a primary title</PrimaryTitle>
        <SecondaryTitle>This is a secondary title</SecondaryTitle>
        <Subtitle>This a subtitle</Subtitle>
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
    </Layout>
  );
};

export default UiKitPage;
