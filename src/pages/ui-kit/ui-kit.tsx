import React from "react";
import {
  Section,
  SeparatedColumn,
  ThreeColumnGrid,
  TwoColumnGrid,
} from "../../ui/controls/layout";
import {
  Box,
  Button,
  Container,
  IconBurger,
  IconClose,
  Link,
  LinkButton,
  LogoBlock,
  Menu,
  MenuItem,
  Sider,
} from "../../ui/controls";
import {
  ContainerSize,
  TextColor,
  ButtonType,
  ButtonShape,
  LogoSize,
} from "../../ui/types";
import { BackgroundColor } from "../../ui/types/background-color.enum";
import {
  MainTitle,
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Subtitle4,
  Text1,
  Text2,
  Text3,
  Text4,
  Title,
} from "../../ui/controls/typography";
// TODO: this is a temporary page to display the ui components
const UiKitPage: React.FC = () => {
  return (
    <>
      <Sider>
        <Box pb={3}>
          <LogoBlock altText="Логотип" to="/" size={LogoSize.Small} />
        </Box>
        <Menu vertical={true}>
          <MenuItem>
            <Link to="/#info">О деменции</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/#sponsors">Партнеры</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/news-grid">Новости</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/#about">О фонде</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/#about">Контакты</Link>
          </MenuItem>
        </Menu>
      </Sider>
      <Container size={ContainerSize.Large}>
        <MainTitle>Новости (Main Title)</MainTitle>
      </Container>
      <Section>
        <Container size={ContainerSize.Large}>
          <Box mb={2}>
            <Title>Что нового? Кто с нами? (Title)</Title>
          </Box>
          <Box mb={2} mt={6}>
            <Subtitle1>О деменции, Когнитивные функции (Subtitle1)</Subtitle1>
          </Box>
          <Box mb={2}>
            <Subtitle2>Внимание, Восприятие (Subtitle2)</Subtitle2>
          </Box>
          <Box mb={2}>
            <Subtitle3>Как он устроен, Что это такое? (Subtitle3)</Subtitle3>
          </Box>
          <Box mb={2}>
            <Subtitle4>Отвечает за (Subtitle4)</Subtitle4>
          </Box>
          <Box mb={2}>
            <Text1>
              сложные <strong>функции</strong> головного мозга, когнитивное
              здоровье (Text1)
            </Text1>
          </Box>
          <Box mb={2}>
            <Text2>Способность воспринимать (Text2)</Text2>
          </Box>
          <Box mb={2}>
            <Text3>Перейти к ленте новостей, Пройти тест вместе (Text3)</Text3>
          </Box>
          <Box mb={2}>
            <Text4>Благотворительный фонд, Деменция - стойкое (Text4)</Text4>
          </Box>
        </Container>
      </Section>
      <TwoColumnGrid>
        <Subtitle1>2х колоночная секция: 1ая колонка</Subtitle1>
        <Subtitle1>2х колоночная секция: 2ая колонка</Subtitle1>
      </TwoColumnGrid>
      <ThreeColumnGrid>
        <SeparatedColumn>
          <Subtitle2>3х колоночная секция: 1ая колонка</Subtitle2>
          <Box mb={2}>
            <Text2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              congue imperdiet justo, eget egestas urna. Nulla suscipit
              facilisis semper. Cras tincidunt turpis in nulla efficitur, nec
              vulputate lectus hendrerit. Donec et neque eu dui dapibus gravida.
              Pellentesque non justo a tortor maximus placerat. Pellentesque
              porttitor id justo at finibus. Mauris non libero eleifend, aliquet
              nunc eget, ornare ipsum. Vivamus facilisis quis arcu et varius.
              Morbi commodo nisi et ante feugiat, quis egestas lacus fringilla.
              Curabitur pellentesque, ante ut vehicula feugiat, nisi odio
              sodales nunc, a malesuada diam ante sed nibh. Nam scelerisque,
              odio nec malesuada varius, sem erat pulvinar neque, id sodales
              nisl mi ut velit. Nulla tincidunt arcu vitae nibh accumsan, vel
              placerat ligula placerat. Nam feugiat tortor quis nulla
              ullamcorper rhoncus.
            </Text2>
          </Box>
        </SeparatedColumn>
        <SeparatedColumn>
          <Subtitle2>3х колоночная секция: 2ая колонка</Subtitle2>
          <Box mb={2}>
            <Text2>
              Aenean facilisis sed nibh at iaculis. Fusce molestie, nunc eu
              egestas ornare, tellus diam dapibus erat, eget suscipit tortor
              risus vel sem. Nullam ut enim a neque feugiat euismod. Suspendisse
              vestibulum enim vitae turpis blandit congue. Nam porttitor pretium
              nisi, quis placerat libero aliquet eu. Sed pretium, augue sed
              tincidunt laoreet, dolor sapien vestibulum sem, eu sagittis ex
              arcu rhoncus massa. Quisque placerat, quam ac placerat laoreet,
              dolor leo imperdiet erat, eu pulvinar augue nibh vel nibh.
              Praesent tincidunt, massa ut suscipit placerat, ex mauris placerat
              lacus, vel commodo dolor magna id velit. Phasellus bibendum quis
              mauris tempus suscipit.
            </Text2>
          </Box>
        </SeparatedColumn>
        <SeparatedColumn>
          <Subtitle2>3х колоночная секция: 3я колонка</Subtitle2>
          <Box mb={2}>
            <Text2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              congue imperdiet justo, eget egestas urna. Nulla suscipit
              facilisis semper. Cras tincidunt turpis in nulla efficitur, nec
              vulputate lectus hendrerit. Donec et neque eu dui dapibus gravida.
              Pellentesque non justo a tortor maximus placerat. Pellentesque
              porttitor id justo at finibus. Mauris non libero eleifend, aliquet
              nunc eget, ornare ipsum. Vivamus facilisis quis arcu et varius.
              Morbi commodo nisi et ante feugiat, quis egestas lacus fringilla.
              Curabitur pellentesque, ante ut vehicula feugiat, nisi odio
              sodales nunc, a malesuada diam ante sed nibh. Nam scelerisque,
              odio nec malesuada varius, sem erat pulvinar neque, id sodales
              nisl mi ut velit. Nulla tincidunt arcu vitae nibh accumsan, vel
              placerat ligula placerat. Nam feugiat tortor quis nulla
              ullamcorper rhoncus.
            </Text2>
          </Box>
        </SeparatedColumn>
      </ThreeColumnGrid>

      <Section>
        <Container size={ContainerSize.Large}>
          <Box mb={2} mt={6}>
            <Subtitle1>Containers</Subtitle1>
          </Box>
          <Box mb={4}>
            <Container
              size={ContainerSize.Large}
              bgColor={BackgroundColor.Alt3}
            >
              <Text1 mt={6} mb={6} ml={2} textColor={TextColor.Accent1}>
                Container size=ContainerSize.Large bgColor=BackgroundColor.Alt3
              </Text1>
            </Container>
          </Box>
          <Box mb={4}>
            <Container
              size={ContainerSize.Medium}
              bgColor={BackgroundColor.Alt1}
            >
              <Text1 mt={6} mb={6} ml={2} textColor={TextColor.Secondary}>
                Container size=ContainerSize.Medium bgColor=BackgroundColor.Alt1
              </Text1>
            </Container>
          </Box>
          <Box mb={4}>
            <Container
              size={ContainerSize.MediumSmall}
              bgColor={BackgroundColor.Alt2}
            >
              <Text1 mt={6} mb={6} ml={2} textColor={TextColor.Secondary}>
                Container size=ContainerSize.MediumSmall
                bgColor=BackgroundColor.Alt2
              </Text1>
            </Container>
          </Box>
        </Container>
      </Section>
      <Section>
        <Container size={ContainerSize.Large}>
          <Box mb={2}>
            <Subtitle1>Buttons</Subtitle1>
          </Box>
          <Box mb={2}>
            <Button uppercase>Primary Button</Button>
          </Box>
          <Box mb={2}>
            <LinkButton>LinkButton</LinkButton>
          </Box>
          <Box mb={2}>
            <Button type={ButtonType.Secondary} ghost>
              Button
            </Button>
          </Box>
          <Box mb={2}>
            <Button shape={ButtonShape.Circle} type={ButtonType.Alt}>
              12
            </Button>
          </Box>
        </Container>
      </Section>
      <Section>
        <Container size={ContainerSize.Large}>
          <Subtitle1>Links</Subtitle1>
          <Box mb={2}>
            <Link to="/ui-kit">Пройти тест</Link>
            <Menu vertical={true} gap={18} gapSmallScreen={12}>
              <MenuItem>
                <Link to="/ui-kit">Тест на деменцию</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/ui-kit">Центры профилактики</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/ui-kit">Знания</Link>
              </MenuItem>
            </Menu>
          </Box>
        </Container>
      </Section>
      <Section>
        <Container size={ContainerSize.Large}>
          <Subtitle1>Icons</Subtitle1>
          <Box m={4}>
            <IconBurger />
          </Box>
          <Box m={4}>
            <IconClose />
          </Box>
        </Container>
      </Section>
      <Section>
        <Container size={ContainerSize.Large}>
          <Subtitle1>Animations</Subtitle1>
          <Box mb={3}>
            <Text1 hoverColor={TextColor.Accent1}>
              Text change on mouse hover: hoverColor=TextColor.Accent1
            </Text1>
          </Box>
          nhj
          <Box mb={3}>
            <Text1 textColor={TextColor.Accent1} hoverColor={TextColor.Accent2}>
              Text change on mouse hover: textColor=TextColor.Accent1
              hoverColor=TextColor.Accent2
            </Text1>
          </Box>
        </Container>
      </Section>
      <Section>
        <Container size={ContainerSize.Large}>
          <Subtitle1>Inputs</Subtitle1>
          <Text1>todo inputs</Text1>
        </Container>
      </Section>
    </>
  );
};

export default UiKitPage;
