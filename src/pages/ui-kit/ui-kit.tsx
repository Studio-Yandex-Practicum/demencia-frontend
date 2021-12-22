import React from "react";
import { Layout, Main, Section } from "../../ui/controls/layout";
import {
  H1,
  MainTitle,
  P,
  PrimaryTitle,
  SecondaryTitle,
  Subtitle,
  Subtitle1,
  TextBlock,
  Title2,
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
          <MainTitle>Новости (Main Title)</MainTitle>
        </Container>
        <Section>
          <Container size={ContainerSize.Large}>
            <Box mb={2} mt={6}>
              <PrimaryTitle>
                О деменции, Когнитивные функции (Primary Title)
              </PrimaryTitle>
            </Box>
            <Box mb={2}>
              <SecondaryTitle>
                Внимание, Восприятие (Secondary Title)
              </SecondaryTitle>
            </Box>
            <Box mb={2}>
              <Subtitle>Как он устроен, Что это такое? (Subtitle) </Subtitle>
            </Box>
            <Box mb={2}>
              <Subtitle1>Отвечает за (Subtitle1)</Subtitle1>
            </Box>
            <Box mb={2}>
              <TextBlock level={TypographyLevel.Body1}>
                Способность воспринимать (body1)
              </TextBlock>
            </Box>
            <Box mb={2}>
              <Title2>Что нового? Кто с нами? (Title2)</Title2>
            </Box>
            <Box mb={2}>
              <TextBlock level={TypographyLevel.Body3} type={ColorType.Caption}>
                Перейти к ленте новостей, Пройти тест вместе (body3)
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock level={TypographyLevel.Text}>
                сложные <strong>функции</strong> головного мозга, когнитивное
                здоровье (Text)
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock level={TypographyLevel.SmallText}>
                Благотворительный фонд, Деменция - стойкое (SmallText)
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
        <Box ml={5}>
          <TextBlock level={TypographyLevel.Footer}>
            © 2021 Благотворительный фонд «Память поколений»
          </TextBlock>
        </Box>
      </Footer>
    </Layout>
  );
};

export default UiKitPage;
