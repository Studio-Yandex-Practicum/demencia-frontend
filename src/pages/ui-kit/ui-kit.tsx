import React from "react";
import { Layout, Main, Section } from "../../ui/controls/layout";
import { TextBlock } from "../../ui/controls/typography";
import {
  Box,
  BurgerButton,
  Button,
  Container,
  Footer,
  Header,
  Link,
  LinkButton,
  LogoBlock,
  Menu,
  MenuItem,
  MenuItems,
} from "../../ui/controls";
import { ContainerSize, TextColor, TypographyLevel } from "../../ui/types";
import { BackgroundColor } from "../../ui/types/color-type.enum";
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
          <TextBlock
            uppercase
            level={TypographyLevel.MainTitle}
            textColor={TextColor.Accent1}
          >
            Новости (Main Title)
          </TextBlock>
        </Container>
        <Section>
          <Container size={ContainerSize.Large}>
            <Box mb={2}>
              <TextBlock
                uppercase
                level={TypographyLevel.Title}
                textColor={TextColor.Accent2}
              >
                Что нового? Кто с нами? (Title)
              </TextBlock>
            </Box>
            <Box mb={2} mt={6}>
              <TextBlock
                uppercase
                level={TypographyLevel.Subtitle1}
                textColor={TextColor.Accent1}
              >
                О деменции, Когнитивные функции (Subtitle1)
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock
                uppercase
                level={TypographyLevel.Subtitle2}
                textColor={TextColor.Accent1}
              >
                Внимание, Восприятие (Subtitle2)
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock
                uppercase
                level={TypographyLevel.Subtitle3}
                textColor={TextColor.Shadow}
              >
                Как он устроен, Что это такое? (Subtitle3)
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock uppercase level={TypographyLevel.Subtitle4}>
                Отвечает за (Subtitle4)
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock level={TypographyLevel.Text1}>
                сложные <strong>функции</strong> головного мозга, когнитивное
                здоровье (Text1)
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock level={TypographyLevel.Text2}>
                Способность воспринимать (Text2)
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock
                level={TypographyLevel.Text3}
                textColor={TextColor.Shadow}
              >
                Перейти к ленте новостей, Пройти тест вместе (Text3)
              </TextBlock>
            </Box>
            <Box mb={2}>
              <TextBlock level={TypographyLevel.Text4}>
                Благотворительный фонд, Деменция - стойкое (Text4)
              </TextBlock>
            </Box>
          </Container>
        </Section>
        <Section>
          <Container size={ContainerSize.Large}>
            <Box mb={2}>
              <TextBlock
                uppercase
                level={TypographyLevel.Subtitle1}
                textColor={TextColor.Accent1}
              >
                Containers
              </TextBlock>
            </Box>
            <Box mb={4}>
              <Container
                size={ContainerSize.Large}
                bgColor={BackgroundColor.Alt3}
              >
                <TextBlock
                  mt={6}
                  mb={6}
                  ml={2}
                  level={TypographyLevel.Text1}
                  textColor={TextColor.Accent1}
                >
                  Container size=ContainerSize.Large bgColor=ColorType.Accent
                </TextBlock>
              </Container>
            </Box>
            <Box mb={4}>
              <Container
                size={ContainerSize.Medium}
                bgColor={BackgroundColor.Alt1}
              >
                <TextBlock
                  mt={6}
                  mb={6}
                  ml={2}
                  level={TypographyLevel.Text1}
                  textColor={TextColor.Secondary}
                >
                  Container size=ContainerSize.Medium bgColor=ColorType.Primary
                </TextBlock>
              </Container>
            </Box>
            <Box mb={4}>
              <Container
                size={ContainerSize.MediumSmall}
                bgColor={BackgroundColor.Alt2}
              >
                <TextBlock
                  mt={6}
                  mb={6}
                  ml={2}
                  level={TypographyLevel.Text1}
                  textColor={TextColor.Secondary}
                >
                  Container size=ContainerSize.MediumSmall
                  bgColor=ColorType.Secondary
                </TextBlock>
              </Container>
            </Box>
          </Container>
        </Section>
        <Section>
          <Container size={ContainerSize.Large}>
            <Box mb={2}>
              <TextBlock
                uppercase
                level={TypographyLevel.Subtitle1}
                textColor={TextColor.Accent1}
              >
                Buttons
              </TextBlock>
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
            <TextBlock
              uppercase
              level={TypographyLevel.Subtitle1}
              textColor={TextColor.Accent1}
            >
              Links
            </TextBlock>
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
            <TextBlock
              uppercase
              level={TypographyLevel.Subtitle1}
              textColor={TextColor.Accent1}
            >
              Icons
            </TextBlock>
            <TextBlock level={TypographyLevel.Text1}>todo icons</TextBlock>
          </Container>
        </Section>
        <Section>
          <Container size={ContainerSize.Large}>
            <TextBlock
              uppercase
              level={TypographyLevel.Subtitle1}
              textColor={TextColor.Accent1}
            >
              Animations
            </TextBlock>
            <TextBlock level={TypographyLevel.Text1}>todo animations</TextBlock>
          </Container>
        </Section>
        <Section>
          <Container size={ContainerSize.Large}>
            <TextBlock
              uppercase
              level={TypographyLevel.Subtitle1}
              textColor={TextColor.Accent1}
            >
              Inputs
            </TextBlock>
            <TextBlock level={TypographyLevel.Text1}>todo inputs</TextBlock>
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
