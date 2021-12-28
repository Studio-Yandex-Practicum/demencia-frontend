import React from "react";
import { Section } from "../../ui/controls/layout";
import {
  Box,
  Button,
  Container,
  Link,
  LinkButton,
  Menu,
  MenuItem,
  MenuItems,
} from "../../ui/controls";
import { ContainerSize, TextColor, ButtonType } from "../../ui/types";
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
      <Section>
        <Container size={ContainerSize.Large}>
          <Box mb={2}>
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
        </Container>
      </Section>
      <Section>
        <Container size={ContainerSize.Large}>
          <Subtitle1>Links</Subtitle1>
          <Box mb={2}>
            <Link to="/ui-kit">Пройти тест</Link>
            <Menu>
              <MenuItems vertical={true} gap={18} gapSmallScreen={12}>
                <MenuItem>
                  <Link to="/ui-kit">Тест на деменцию</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/ui-kit">Центры профилактики</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/ui-kit">Знания</Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </Box>
        </Container>
      </Section>
      <Section>
        <Container size={ContainerSize.Large}>
          <Subtitle1>Icons</Subtitle1>
          <Text1>todo icons</Text1>
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
