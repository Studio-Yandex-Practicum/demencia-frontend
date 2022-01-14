import React from "react";
import {
  Section,
  TwoColumnGrid,
  ThreeColumnGrid,
  SeparatedColumn,
} from "../ui/controls/layout";
import { Box, Container } from "../ui/controls";
import {
  ContainerSize,
  PaletteColor,
  ScreenSize,
  TextColor,
} from "../ui/types";
import { BackgroundColor } from "../ui/types/background-color.enum";
import {
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Text1,
  Text2,
} from "../ui/controls/typography";
import styled from "styled-components";
import attentionPic from "../images/attention-pic.png";
import controlPic from "../images/control-functions-pic.png";
import memoryPic from "../images/memory-pic.png";
import praxisPic from "../images/praxis-pic.png";
import sensePic from "../images/sense-pic.png";
import speechPic from "../images/speech-pic.png";
import purplePuzzleTranslucent from "../images/purple-puzzle-translucent.svg";
import parietalLobePic from "../images/parietal-lobe-pic.png";
import frontalLobePic from "../images/frontal-lobe-pic.png";
import temporalLobePic from "../images/temporal-lobe-pic.png";
import occipitalLobePic from "../images/occipital-lobe-pic.png";
import purpleHalfCirclePic from "../images/purple-half-circle-pic.png";
import greenHalfCirclePic from "../images/green-half-circle-pic.png";

const FlexColumn = styled.div<{
  padding?: string;
  alignItems?: string;
  maxWidth?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: ${({ alignItems }) => alignItems};
  width: 100%;
  max-width: ${({ maxWidth = "1200px" }) => maxWidth};
  padding: ${({ padding }) => padding};
`;

const FlexRow = styled.div<{ adaptive?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
  width: 100%;
  max-width: 1200px;
  z-index: 10;
  position: relative;

  @media (max-width: ${ScreenSize.Small}px) {
    flex-direction: ${(p) => (p.adaptive ? "column" : "row")};
  }
`;

const PurpleRect = styled.div`
  position: absolute;
  z-index: 1;
  width: calc(50% - 32px);
  height: 136px;
  background-color: ${(p) => p.theme.colors.backgroundAlt1};
  right: 0;
  top: 0;
  visibility: hidden;

  @media screen and (min-width: ${ScreenSize.Medium}px) {
    visibility: visible;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 2fr));
  width: 100%;
  max-width: 1200px;
  margin-left: 16px;
  margin-right: 16px;
`;

const StyledImg = styled.img<{
  margin?: string;
  position?: string;
  top?: string;
  width?: number;
}>`
  margin: ${({ margin }) => margin};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  object-fit: contain;
  object-position: top;

  width: ${(p) => (p.width ? `${p.width}px` : `80px`)};

  @media (max-width: ${ScreenSize.Small}px) {
    width: ${(p) => (p.width ? `${p.width / 2}px` : `40px`)};
  }
`;

const List = styled.ul<{
  color?: string;
}>`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${({ color = "black" }) => color};
`;

const CognitiveFunctionsGrid = styled(TwoColumnGrid)`
  z-index: 2;
`;

const Details: React.FC = () => {
  return (
    <>
      <Section flex centered>
        <CognitiveFunctionsGrid mt={5}>
          <Box mr={8} maxWidth={370}>
            <Subtitle1>КОГНИТИВНЫЕ ФУНКЦИИ</Subtitle1>
            <Subtitle3 mt={2}>Что это такое?</Subtitle3>
          </Box>
          <Container
            size={ContainerSize.MediumSmall}
            bgColor={BackgroundColor.Alt2}
          >
            <Text1 mt={4} mb={4} ml={4} mr={4} textColor={TextColor.Secondary}>
              <strong>Когнитивные функции</strong> - сложные функции головного
              мозга, с помощью которых осуществляется процесс познания мира и
              обеспечивается взаимодействие с ним.
            </Text1>
          </Container>
        </CognitiveFunctionsGrid>
        <PurpleRect />
      </Section>

      <Section flex centered>
        <TwoColumnGrid>
          <Box mt={7} maxWidth={600}>
            <FlexRow>
              <StyledImg src={attentionPic} />
              <FlexColumn>
                <Subtitle2 ml={3}>ВНИМАНИЕ</Subtitle2>
                <Text2 ml={3}>
                  способность поддерживать требуемый для умственной работы
                  уровень уровень психической активности и фокусировать
                  деятельность на задаче
                </Text2>
              </FlexColumn>
            </FlexRow>
          </Box>

          <Box mt={7} maxWidth={600}>
            <FlexRow>
              <StyledImg src={sensePic} />
              <FlexColumn>
                <Subtitle2 ml={3}>ВОСПРИЯТИЕ (ГНОЗИС)</Subtitle2>
                <Text2 ml={3}>
                  способность воспринимать и распознавать информацию,
                  поступающую от органов чувств
                </Text2>
              </FlexColumn>
            </FlexRow>
          </Box>

          <Box mt={7} maxWidth={600}>
            <FlexRow>
              <StyledImg src={memoryPic} />
              <FlexColumn>
                <Subtitle2 ml={3}>ПАМЯТЬ</Subtitle2>
                <Text2 ml={3}>
                  способность запечатлевать, сохранять и многократно
                  воспроизводить получаемую в течение жизни информацию
                </Text2>
              </FlexColumn>
            </FlexRow>
          </Box>

          <Box mt={7} maxWidth={600}>
            <FlexRow>
              <StyledImg src={praxisPic} />
              <FlexColumn>
                <Subtitle2 ml={3}>ПРАКСИС</Subtitle2>
                <Text2 ml={3}>
                  способность приобретать, сохранять или использовать различные
                  двигательные навыки
                </Text2>
              </FlexColumn>
            </FlexRow>
          </Box>

          <Box mt={7} maxWidth={600}>
            <FlexRow>
              <StyledImg src={speechPic} />
              <FlexColumn>
                <Subtitle2 ml={3}>РЕЧЬ</Subtitle2>
                <Text2 ml={3}>
                  способность к коммуникации в устной и письменной форме,
                  включая понимание обращенной речи и построение собственного
                  высказывания
                </Text2>
              </FlexColumn>
            </FlexRow>
          </Box>

          <Box mt={7} maxWidth={600}>
            <FlexRow>
              <StyledImg src={controlPic} />
              <FlexColumn>
                <Subtitle2 ml={3}>УПРАВЛЯЮЩИЕ ФУНКЦИИ (РЕГУЛЯТОРНЫЕ)</Subtitle2>
                <Text2 ml={3}>
                  способность управлять своей познавательной деятельностью и
                  поведением, включая планирование и контроль за выполнением
                  совершаемых действий
                </Text2>
              </FlexColumn>
            </FlexRow>
          </Box>
        </TwoColumnGrid>
      </Section>

      <Section flex centered>
        <Box mt={7} backgroundColor={PaletteColor.LightGreen}>
          <FlexRow adaptive>
            <StyledImg
              src={purplePuzzleTranslucent}
              margin="0 0 0 20px"
              position="relative"
              top="-10px"
            />
            <Text1 mt={4} mb={4} ml={4} mr={4} textColor={TextColor.Primary}>
              Когнитивное здоровье - способность четко мыслить, учиться и
              помнить. Эти способности важны для повседневной жизни, выполнения
              задач. Когнитивные функции помогают адаптироваться к новым
              условиям, пользоваться имеющимися знаниями.
            </Text1>
          </FlexRow>
        </Box>
      </Section>

      <Section flex centered mt={7}>
        <TwoColumnGrid>
          <Box maxWidth={370}>
            <Subtitle1>КОГНИТИВНЫЕ РАССТРОЙСТВА</Subtitle1>
            <Subtitle3 mt={2}>Что это такое?</Subtitle3>
          </Box>
          <Container
            size={ContainerSize.MediumSmall}
            bgColor={BackgroundColor.Alt2}
          >
            <Text1 mt={4} mb={4} ml={4} mr={4} textColor={TextColor.Secondary}>
              <strong>Когнитивные расстройства</strong> - когнитивных функций
              (внимания, памяти, речи, восприятия, восприятия, праксиса,
              управляющих функций) по сравнению с исходным индивидуальным и/или
              средними возрастными и образовательными уровнями вследствие
              патологии головного мозга и нарушения его функций, влияющее на
              эффективность обучения, профессиональной, социальной и бытовой
              деятельности.
            </Text1>
          </Container>
        </TwoColumnGrid>
      </Section>

      <Section flex centered mt={7}>
        <ThreeColumnGrid>
          <SeparatedColumn flex centered>
            <Subtitle2 uppercase={false}>Легкие</Subtitle2>
            <List>
              <Box>
                <li>
                  <Text1 textColor={TextColor.Primary} mr={4}>
                    когнитивные расстройства выражены минимально
                  </Text1>
                </li>
              </Box>
              <li>
                <Text1 textColor={TextColor.Primary} mr={4}>
                  проявляется снижение концентрации внимания и нарушение
                  кратковременной памяти
                </Text1>
              </li>
              <li>
                <Text1 textColor={TextColor.Primary} mr={4}>
                  когнитивные нарушения могут вызывать обеспокоенность человека
                  и снижение качества его жизни
                </Text1>
              </li>
            </List>
          </SeparatedColumn>
          <SeparatedColumn flex centered>
            <Subtitle2 uppercase={false}>Умеренные</Subtitle2>
            <List>
              <li>
                <Text1 textColor={TextColor.Primary} mr={4}>
                  нарушения одной или нескольких когнитивных функций
                </Text1>
              </li>
              <li>
                <Text1 textColor={TextColor.Primary} mr={4}>
                  нарушения выходят за пределы возрастной нормы, но не
                  ограничивают повседневную активность
                </Text1>
              </li>
              <li>
                <Text1 textColor={TextColor.Primary} mr={4}>
                  когнитивные нарушения вызывают беспокойство человека и
                  обращают на себя внимание окружающих
                </Text1>
              </li>
            </List>
          </SeparatedColumn>
          <SeparatedColumn flex centered>
            <Subtitle2 uppercase={false}>Тяжелые</Subtitle2>
            <List>
              <li>
                <Text1 textColor={TextColor.Primary} mr={4}>
                  серьезные нарушения памяти и других когнитивных функций
                </Text1>
              </li>
              <li>
                <Text1 textColor={TextColor.Primary} mr={4}>
                  нарушения влияют и ограничивают повседневную жизнь
                </Text1>
              </li>
              <li>
                <Text1 textColor={TextColor.Primary} mr={4}>
                  наиболее тяжелым видом когнитивных расстройств является
                  деменция
                </Text1>
              </li>
            </List>
          </SeparatedColumn>
        </ThreeColumnGrid>
      </Section>

      <Section
        flex
        centered
        mt={6}
        pt={7}
        pl={3}
        pr={3}
        backgroundColor={PaletteColor.DarkPurple}
        borderBox
      >
        <FlexColumn>
          <Subtitle1 textColor={TextColor.Secondary} uppercase={true}>
            ГОЛОВНОЙ МОЗГ
          </Subtitle1>
          <Subtitle3
            mt={1}
            mb={6}
            textColor={TextColor.Secondary}
            uppercase={true}
          >
            КАК ОН УСТРОЕН
          </Subtitle3>
        </FlexColumn>
      </Section>

      <Section flex centered backgroundColor={PaletteColor.Green} pb={12}>
        <GridContainer>
          <Box mt={7}>
            <FlexRow>
              <StyledImg src={parietalLobePic} width={100} />
              <FlexColumn>
                <Subtitle2
                  ml={2}
                  uppercase={true}
                  underlined={true}
                  textColor={TextColor.Secondary}
                  hoverColor={TextColor.Accent1}
                >
                  ТЕМЕННАЯ
                </Subtitle2>
                <Subtitle3 mt={2} ml={2} textColor={TextColor.Secondary}>
                  ОТВЕЧАЕТ ЗА:
                </Subtitle3>
                <List color="white">
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      счет, письмо, различение правой и левой сторон
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      тактильную и слуховую информацию
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      анализ сигналов от других органов чувств
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      распознавание сведений о форме предметов, их текстуре и
                      массе
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      трехмерное восприятие окружающего мира
                    </Text1>
                  </li>
                </List>
                <Subtitle3 mt={2} ml={2} textColor={TextColor.Secondary}>
                  ПРИ ПОВРЕЖДЕНИИ:
                </Subtitle3>
                <List color="white">
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      неспособность распознавать предметы, лица
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      нарушение способности писать, считать, различать правую и
                      левую стороны
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      неспособность воспринимать ощущения органами чувств
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      забывание порядка действий в процессе
                    </Text1>
                  </li>
                </List>
              </FlexColumn>
            </FlexRow>
          </Box>

          <Box mt={7}>
            <FlexRow>
              <StyledImg src={frontalLobePic} width={100} />
              <FlexColumn>
                <Subtitle2
                  ml={2}
                  uppercase={true}
                  underlined={true}
                  textColor={TextColor.Secondary}
                  hoverColor={TextColor.Accent1}
                >
                  ЛОБНАЯ
                </Subtitle2>
                <Subtitle3 mt={2} ml={2} textColor={TextColor.Secondary}>
                  ОТВЕЧАЕТ ЗА:
                </Subtitle3>
                <List color="white">
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      абстрактное мышление
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      программирование действий и принятие решений
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      регулирование социального поведения
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      побуждение и мотивацию человека
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      освоение навыков
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      поддержание вертикального положения тела
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      некоторые речевые функции
                    </Text1>
                  </li>
                </List>
                <Subtitle3 mt={2} ml={2} textColor={TextColor.Secondary}>
                  ПРИ ПОВРЕЖДЕНИИ:
                </Subtitle3>
                <List color="white">
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      зацикленность на действии
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      повторение одного и того же слова/фразы
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      перекладывание предметов с места на место
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      мелкая семенящая походка и сгорбленная поза
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      замедленность реакций, безынициативность
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      беспокойное поведение
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      социальная навязчивость
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      затрудненное произнесение слов
                    </Text1>
                  </li>
                </List>
              </FlexColumn>
            </FlexRow>
          </Box>

          <Box mt={7}>
            <FlexRow>
              <StyledImg src={temporalLobePic} width={100} />
              <FlexColumn>
                <Subtitle2
                  ml={2}
                  uppercase={true}
                  underlined={true}
                  textColor={TextColor.Secondary}
                  hoverColor={TextColor.Accent1}
                >
                  ВИСОЧНАЯ
                </Subtitle2>
                <Subtitle3 mt={2} ml={2} textColor={TextColor.Secondary}>
                  ОТВЕЧАЕТ ЗА:
                </Subtitle3>
                <List color="white">
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      слух
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      понимание речи
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      зрительную память
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      долговременную память
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      обоняние
                    </Text1>
                  </li>
                </List>
                <Subtitle3 mt={2} ml={2} textColor={TextColor.Secondary}>
                  ПРИ ПОВРЕЖДЕНИИ:
                </Subtitle3>
                <List color="white">
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      расстройство сознания, памяти, построения и понимания речи
                    </Text1>
                  </li>
                </List>
              </FlexColumn>
            </FlexRow>
          </Box>

          <Box mt={7}>
            <FlexRow>
              <StyledImg src={occipitalLobePic} width={100} />
              <FlexColumn>
                <Subtitle2
                  ml={2}
                  uppercase={true}
                  underlined={true}
                  textColor={TextColor.Secondary}
                  hoverColor={TextColor.Accent1}
                >
                  ЗАТЫЛОЧНАЯ
                </Subtitle2>
                <Subtitle3 mt={2} ml={2} textColor={TextColor.Secondary}>
                  ОТВЕЧАЕТ ЗА:
                </Subtitle3>
                <List color="white">
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      зрительное восприятие
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      восприятие цвета, формы, движения
                    </Text1>
                  </li>
                </List>
                <Subtitle3 mt={2} ml={2} textColor={TextColor.Secondary}>
                  ПРИ ПОВРЕЖДЕНИИ:
                </Subtitle3>
                <List color="white">
                  <li>
                    <Text1 textColor={TextColor.Secondary} mr={4}>
                      невозможность зрительного восприятия
                    </Text1>
                  </li>
                </List>
              </FlexColumn>
            </FlexRow>
          </Box>
        </GridContainer>
      </Section>

      <Section flex centered backgroundColor={PaletteColor.LightGreen} pb={12}>
        <Subtitle1 mt={4} textColor={TextColor.Accent1} uppercase={true}>
          РАЗВИТИЕ КОГНИТИВНЫХ РАССТРОЙСТВ
        </Subtitle1>

        <GridContainer>
          <Box mt={6}>
            <FlexRow>
              <StyledImg src={purpleHalfCirclePic} />
              <FlexColumn>
                <Subtitle2
                  ml={2}
                  uppercase={true}
                  textColor={TextColor.Accent1}
                  hoverColor={TextColor.Accent2}
                >
                  ФАКТОРЫ РИСКА
                </Subtitle2>
                <List>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4} mt={2}>
                      возраст 65+
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      генетика
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      гипертония и сердечно-сосудистые заболевания
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      ожирение
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      сахарный диабет
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      вредные привычки (курение, употребление алкоголя)
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      низкая физическая активность
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      низкая когнитивная активность
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      социальная изоляция
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      низкий уровень образования
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      черепно-мозговые травмы
                    </Text1>
                  </li>
                </List>
              </FlexColumn>
            </FlexRow>
          </Box>

          <Box mt={6}>
            <FlexRow>
              <StyledImg src={greenHalfCirclePic} />
              <FlexColumn>
                <Subtitle2
                  ml={2}
                  uppercase={true}
                  textColor={TextColor.Accent2}
                  hoverColor={TextColor.Accent1}
                >
                  ПРОФИЛАКТИКА
                </Subtitle2>
                <List>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4} mt={2}>
                      отказ от вредных привычек (курение, употребление алкоголя)
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      физическая активность
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      когнитивная активность
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      правильное питание
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      своевременное лечение заболеваний
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      социальная активность
                    </Text1>
                  </li>
                  <li>
                    <Text1 textColor={TextColor.Primary} mr={4}>
                      контроль уровня давления, сахара в крови, холестерина
                    </Text1>
                  </li>
                </List>
              </FlexColumn>
            </FlexRow>
          </Box>
        </GridContainer>
      </Section>
    </>
  );
};

export default Details;
