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
  LinkButton,
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
import { ContainerSize, ColorType, TypographyLevel } from "../../ui/types";
// TODO: this is a temporary page to display the ui components
const UiKitPage: React.FC = () => {
  return (
    <Layout>
      <Header>
        <BurgerButton />
        <Box mt={3} ml={12}>
          <LogoBlock altText="Логотип" link="#" />
        </Box>
        <Box mt={4} mr={4}>
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
        </Box>
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
              <TextBlock level={TypographyLevel.Headline} renderTag={"h2"}>
                This is a headline text
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock level={TypographyLevel.Title}>
                This is a Title text
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock level={TypographyLevel.Subheading2}>
                This is Subheading2 text
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock level={TypographyLevel.Subheading1}>
                This is Subheading1 text
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock level={TypographyLevel.Body1}>
                This is body1 text
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock level={TypographyLevel.Body2}>
                This is body2 text
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock level={TypographyLevel.Caption}>
                This is caption text
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock type={ColorType.Primary}>
                This is a primary color text
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock type={ColorType.Secondary}>
                This is a secondary color text
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock type={ColorType.Accent}>
                This is a accent color text
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock type={ColorType.AccentAlt}>
                This is a accent alt color text
              </TextBlock>
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
              <Button primary={true}>Primary Button</Button>
            </Box>
            <Box mb={2}>
              <LinkButton>LinkButton</LinkButton>
            </Box>
            <Box mb={2}>
              <Button>Button</Button>
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
