import React, { FC } from "react";
import { Section } from "../../../ui/controls";
import { TextColor, TypographyLevel } from "../../../ui/types";
import {
  StyledSubtitle1,
  StyledText2,
  StyledLink,
  StyledLinkText,
  StyledCardBox,
  StyledSubtitle4,
  StyledGrid,
  StyledCardLink,
  StyledCardLinkText,
  StyledBox,
} from "./information-guide-styles";

const InformationGuide: FC = () => {
  return (
    <Section flex centered mt={8}>
      <StyledSubtitle1 uppercase={false} level={TypographyLevel.Subtitle1}>
        Информационный справочник «Деменция.net»
      </StyledSubtitle1>
      <StyledBox mt={3} flex between alignItems={"center"} pt={4}>
        <StyledText2>
          В&nbsp;дополнение к&nbsp;видеокурсу мы&nbsp;создали Справочник для
          людей, живущих с&nbsp;деменцией, членов их&nbsp;семьи и&nbsp;тех, кто
          ухаживает за&nbsp;ними.
        </StyledText2>
        <StyledLink
          to={
            "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FN43Wm%2FdwN9uYaM9zZpwmV%2B6FzNTs3S0SlWzDhXEWgBzBdDBGAXERXmyG7sgfnae8q%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA_%D0%BF%D0%BE_%D0%B4%D0%B5%D0%BC%D0%B5%D0%BD%D1%86%D0%B8%D0%B8.pdf&nosw=1"
          }
        >
          <StyledLinkText textColor={TextColor.Secondary}>
            СКАЧАТЬ
          </StyledLinkText>
        </StyledLink>
      </StyledBox>
      <StyledGrid pt={5} pl={5} pr={5} zIndex={2}>
        {/*<StyledThreeColumnGrid pt={2} pb={8}>*/}
        <StyledCardBox flex column between>
          <StyledSubtitle4>
            Еженедельный планер физической активности
          </StyledSubtitle4>
          <StyledCardLink
            to={
              "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FZ%2B8aUX%2FnYT8mshowGDKqZgCKZKndzZF2DyX7RhCR9PMAIX4eIlkSfb6cUIM125HKq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%95%D0%B6%D0%B5%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D0%BF%D0%BB%D0%B0%D0%BD%D0%B5%D1%80%20%D1%84%D0%B8%D0%B7%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9%20%D0%B0%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf&nosw=1"
            }
          >
            <StyledCardLinkText textColor={TextColor.Secondary}>
              СКАЧАТЬ
            </StyledCardLinkText>
          </StyledCardLink>
        </StyledCardBox>
        <StyledCardBox flex column between>
          <StyledSubtitle4>Планер на неделю</StyledSubtitle4>
          <StyledCardLink
            to={
              "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FD6Sf%2BY6QXPvAU05xXJSV7gAbiP5OhRLn%2BScU1w091UU5x6aiD9zP%2BGXaEZS1EILLq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%9F%D0%BB%D0%B0%D0%BD%D1%8B%20%D0%BD%D0%B0%20%D0%BD%D0%B5%D0%B4%D0%B5%D0%BB%D1%8E.pdf&nosw=1"
            }
          >
            <StyledCardLinkText textColor={TextColor.Secondary}>
              СКАЧАТЬ
            </StyledCardLinkText>
          </StyledCardLink>
        </StyledCardBox>
        <StyledCardBox flex column between>
          <StyledSubtitle4>Планер приема лекарств</StyledSubtitle4>
          <StyledCardLink
            to={
              "https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FE5GdfpCVae0m8Lq1%2BsK6WPg6ska2XynFKqi00mElsEYhe2mdYtV9XkXkoWbh8z1Tq%2FJ6bpmRyOJonT3VoXnDag%3D%3D&name=%D0%9F%D0%BB%D0%B0%D0%BD%D0%B5%D1%80%20%D0%BF%D1%80%D0%B8%D0%B5%D0%BC%D0%B0%20%D0%BB%D0%B5%D0%BA%D0%B0%D1%80%D1%81%D1%82%D0%B2.pdf&nosw=1"
            }
          >
            <StyledCardLinkText textColor={TextColor.Secondary}>
              СКАЧАТЬ
            </StyledCardLinkText>
          </StyledCardLink>
        </StyledCardBox>
        {/*</StyledThreeColumnGrid>*/}
      </StyledGrid>
    </Section>
  );
};

export default InformationGuide;
