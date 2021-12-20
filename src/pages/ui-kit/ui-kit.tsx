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
import {
  Button,
  Box,
  Link,
  Header,
  Menu,
  MenuItems,
  MenuItem,
} from "../../ui/controls";
import { FontSize } from "../../ui/types";
// TODO: this is a temporary page to display the ui components
const UiKitPage: React.FC = () => {
  return (
    <Layout>
      <Header>
        <a href="#">Logo</a>
        <Menu>
          <MenuItems>
            <MenuItem>
              <Link>О ДЕМЕНЦИИ</Link>
            </MenuItem>
            <MenuItem>
              <Link>ПАРТНЕРЫ</Link>
            </MenuItem>
            <MenuItem>
              <Link>НОВОСТИ</Link>
            </MenuItem>
            <MenuItem>
              <Link>О ФОНДЕ</Link>
            </MenuItem>
            <MenuItem>
              <Link>КОНТАКТЫ</Link>
            </MenuItem>
          </MenuItems>
        </Menu>
      </Header>
      <Main>
        <MainTitle>
          MainTitle: This is a page to display the low - level components and
          styles
        </MainTitle>
        <Section>
          <Box mb={2}>
            <PrimaryTitle>This is a primary title</PrimaryTitle>
          </Box>
          <Box mb={2}>
            <SecondaryTitle>This is a secondary title</SecondaryTitle>
          </Box>
          <Box mb={2}>
            <Subtitle>This a subtitle</Subtitle>
          </Box>
          <Box mb={2}>
            <P>This is a paragraph text</P>
          </Box>
        </Section>
        <Section>
          <Box mb={2}>
            <PrimaryTitle>Typography</PrimaryTitle>
          </Box>
          <Box mb={2}>
            <TextBlock size={FontSize.Huge} renderTag={"h2"}>
              This is a huge text
            </TextBlock>
          </Box>
          <Box mb={2}>
            <TextBlock size={FontSize.Large}>This is a large text</TextBlock>
          </Box>
          <Box mb={2}>
            <TextBlock size={FontSize.Medium}>This is medium text</TextBlock>
          </Box>
          <Box mb={2}>
            <TextBlock size={FontSize.Default}>This is text</TextBlock>
          </Box>
        </Section>
        <Section>
          <Box mb={2}>
            <PrimaryTitle>Buttons</PrimaryTitle>
          </Box>
          <Box mb={2}>
            <Button>Пройти тест</Button>
          </Box>
          <Box mb={2}>
            <Button>Пройти тест</Button>
          </Box>
          <Box mb={2}>
            <Button>Пройти тест</Button>
          </Box>
        </Section>
        <Section>
          <PrimaryTitle>Links</PrimaryTitle>
          <Box mb={2}>
            <Link>Пройти тест</Link>
          </Box>
        </Section>
        <Section>
          <PrimaryTitle>Icons</PrimaryTitle>
          <P>todo icons</P>
        </Section>
        <Section>
          <PrimaryTitle>Animations</PrimaryTitle>
          <P>todo animations</P>
        </Section>
        <Section>
          <PrimaryTitle>Inputs</PrimaryTitle>
          <P>todo inputs</P>
        </Section>
      </Main>
      <footer></footer>
    </Layout>
  );
};

export default UiKitPage;
