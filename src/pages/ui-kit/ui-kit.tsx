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
  Container,
  Link,
  Header,
  BurgerButton,
  Menu,
  MenuItems,
  MenuItem,
  LogoBlock,
  Footer,
} from "../../ui/controls";
import { FontSize, ContainerSize, ColorType } from "../../ui/types";
// TODO: this is a temporary page to display the ui components
const UiKitPage: React.FC = () => {
  return (
    <Layout>
      <Header>
        <BurgerButton />
        <Box mt={3} ml={12}>
          <LogoBlock altText="Логотип" link="#" />
        </Box>
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
        <Container size={ContainerSize.Large}>
          <MainTitle>This is the MainTitle</MainTitle>
          <Subtitle>
            This page displays low -level components and their usage{" "}
          </Subtitle>
        </Container>
        <Section>
          <Container size={ContainerSize.Large}>
            <Box mb={2} mt={6}>
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
          </Container>
        </Section>
        <Section>
          <Container size={ContainerSize.Large}>
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
          </Container>
        </Section>
        <Section>
          <Container size={ContainerSize.Large}>
            <Box mb={2}>
              <PrimaryTitle>Containers</PrimaryTitle>
            </Box>
            <Box mb={4}>
              <Container size={ContainerSize.Large} bgColor={ColorType.Accent}>
                <P mt={6} mb={6} ml={2}>
                  Container size=ContainerSize.Large bgColor=ColorType.Accent
                </P>
              </Container>
            </Box>
            <Box mb={4}>
              <Container
                size={ContainerSize.Medium}
                bgColor={ColorType.Primary}
              >
                <Box mt={6} mb={6} ml={2}>
                  Container size=ContainerSize.Medium bgColor=ColorType.Primary
                </Box>
              </Container>
            </Box>
            <Box mb={4}>
              <Container
                size={ContainerSize.MediumSmall}
                bgColor={ColorType.Secondary}
              >
                <Box mt={6} mb={6} ml={2}>
                  Container size=ContainerSize.MediumSmall
                  bgColor=ColorType.Secondary
                </Box>
              </Container>
            </Box>
          </Container>
        </Section>
        <Section>
          <Container size={ContainerSize.Large}>
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
          </Container>
        </Section>
        <Section>
          <Container size={ContainerSize.Large}>
            <PrimaryTitle>Links</PrimaryTitle>
            <Box mb={2}>
              <Link>Пройти тест</Link>
              <Menu>
                <MenuItems vertical={true}>
                  <MenuItem>
                    <Link>Тест на деменцию</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link>Центры профилактики</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link>Знания</Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </Box>
          </Container>
        </Section>
        <Section>
          <Container size={ContainerSize.Large}>
            <PrimaryTitle>Icons</PrimaryTitle>
            <P>todo icons</P>
          </Container>
        </Section>
        <Section>
          <Container size={ContainerSize.Large}>
            <PrimaryTitle>Animations</PrimaryTitle>
            <P>todo animations</P>
          </Container>
        </Section>
        <Section>
          <Container size={ContainerSize.Large}>
            <PrimaryTitle>Inputs</PrimaryTitle>
            <P>todo inputs</P>
          </Container>
        </Section>
      </Main>
      <Footer>
        <Box ml={5}>This is a footer</Box>
      </Footer>
    </Layout>
  );
};

export default UiKitPage;
