import React from "react";
import { Layout, Main, Section } from "../../ui/controls/layout";
import {
  H1,
  MainTitle,
  P,
  PrimaryTitle,
  SecondaryTitle,
  Subtitle,
  TextBlock,
} from "../../ui/controls/typography";
import { Button } from "../../ui/controls/button";
import { FontSize } from "../../ui/types";
// TODO: this is a temporary page to display the ui components
const UiKitPage: React.FC = () => {
  return (
    <Layout>
      <header></header>
      <Main>
        <MainTitle>
          MainTitle: This is a page to display the low - level components and
          styles
        </MainTitle>
        <Section>
          <PrimaryTitle>This is a primary title</PrimaryTitle>
          <SecondaryTitle>This is a secondary title</SecondaryTitle>
          <Subtitle>This a subtitle</Subtitle>
          <P>This is a paragraph text</P>
        </Section>
        <Section>
          <PrimaryTitle>Typography</PrimaryTitle>
          <TextBlock size={FontSize.Huge} renderTag={"h2"}>
            This is a huge text
          </TextBlock>
          <TextBlock size={FontSize.Large}>This is a large text</TextBlock>
          <TextBlock size={FontSize.Medium}>This is medium text</TextBlock>
          <TextBlock size={FontSize.Default}>This is text</TextBlock>
        </Section>
        <Section>
          <PrimaryTitle>Buttons</PrimaryTitle>
          <Button>Пройти тест</Button>
          <Button>Пройти тест</Button>
          <Button>Пройти тест</Button>
        </Section>
        <Section>
          <PrimaryTitle>Links</PrimaryTitle>
        </Section>
        <Section>
          <PrimaryTitle>Icons</PrimaryTitle>
        </Section>
        <Section>
          <PrimaryTitle>Animations</PrimaryTitle>
        </Section>
      </Main>
      <footer></footer>
    </Layout>
  );
};

export default UiKitPage;
