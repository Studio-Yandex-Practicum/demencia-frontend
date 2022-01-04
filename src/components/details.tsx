import React from "react";
import { Section, TwoColumnSection, Main } from "../ui/controls/layout";
import {
  Box,
  Button,
  Container,
  Link,
  LinkButton,
  Menu,
  MenuItem,
  MenuItems,
} from "../ui/controls";
import { ContainerSize, PaletteColor, TextColor } from "../ui/types";
import { BackgroundColor } from "../ui/types/background-color.enum";
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
} from "../ui/controls/typography";
import styled from "styled-components";
import attentionPic from "../images/attention-pic.png";
import controlPic from "../images/control-functions-pic.png";
import memoryPic from "../images/memory-pic.png";
import praxisPic from "../images/praxis-pic.png";
import sensePic from "../images/sense-pic.png";
import speechPic from "../images/speech-pic.png";
import purplePuzzleTranslucent from "../images/purple-puzzle-translucent.svg";

const FlexColumn = styled.div<{
  padding?: string;
  borderLeftRight?: boolean;
  alignItems?: string;
  maxWidth?: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ alignItems }) => alignItems};
  width: 100%;
  max-width: ${({ maxWidth = "1200px" }) => maxWidth};
  padding: ${({ padding }) => padding};
  border-left: ${({ borderLeftRight }) =>
    borderLeftRight ? `2px solid #772988` : ``};
  border-right: ${({ borderLeftRight }) =>
    borderLeftRight ? `2px solid #772988` : ``};
`;

const FlexColumnSection = styled(FlexColumn)`
  max-width: 1980px;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
  width: 100%;
  max-width: 1200px;
  z-index: 10;
  position: relative;
`;

const AbsolutePositionPurpleRect = styled.div`
  display: flex;
  position: absolute;
  z-index: -1;
  width: 50vw;
  height: 150px;
  left: calc(50% + 30px);
  top: -30px;
`;

const AbsolutePositionGreenRect = styled.div`
  display: flex;
  position: absolute;
  z-index: -1;
  width: 50vw;
  height: 100%;
  left: 50%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 2fr));
  width: 100%;
  max-width: 1200px;
`;

const StyledImg = styled.img<{
  margin?: string;
  position?: string;
  top?: string;
}>`
  margin: ${({ margin }) => margin};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  object-fit: contain;
  object-position: top;
`;

const List = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Details: React.FC = () => {
  return (
    <>
      <FlexColumn>
        <FlexRow>
          <Box mr={8}>
            <Subtitle1>КОГНИТИВНЫЕ ФУНКЦИИ</Subtitle1>
            <Subtitle3 mt={2}>Что это такое?</Subtitle3>
          </Box>
          <Container
            size={ContainerSize.MediumSmall}
            bgColor={BackgroundColor.Alt2}
          >
            <Text1 mt={4} mb={4} ml={4} mr={12} textColor={TextColor.Secondary}>
              <strong>Когнитивные функции</strong> - сложные функции головного
              мозга, с помощью которых осуществляется процесс познания мира и
              обеспечивается взаимодействие с ним.
            </Text1>
          </Container>
          <AbsolutePositionPurpleRect>
            <Container
              bgColor={BackgroundColor.Alt1}
              size={ContainerSize.Medium}
            ></Container>
          </AbsolutePositionPurpleRect>
        </FlexRow>
      </FlexColumn>

      <GridContainer>
        <Box mt={7}>
          <FlexRow>
            <StyledImg src={attentionPic} />
            <FlexColumn>
              <Subtitle2 ml={3}>ВНИМАНИЕ</Subtitle2>
              <Text2 ml={3}>
                способность поддерживать требуемый для умственной работы уровень
                уровень психической активности и фокусировать деятельность на
                задаче
              </Text2>
            </FlexColumn>
          </FlexRow>
        </Box>

        <Box mt={7}>
          <FlexRow>
            <StyledImg src={sensePic} />
            <FlexColumn>
              <Subtitle2 ml={3}>ВОСПРИЯТИЕ (ГНОЗИС)</Subtitle2>
              <Text2 ml={3}>
                способность воспринимать и распознавать информацию, поступающую
                от органов чувств
              </Text2>
            </FlexColumn>
          </FlexRow>
        </Box>

        <Box mt={7}>
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

        <Box mt={7}>
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

        <Box mt={7}>
          <FlexRow>
            <StyledImg src={speechPic} />
            <FlexColumn>
              <Subtitle2 ml={3}>РЕЧЬ</Subtitle2>
              <Text2 ml={3}>
                способность к коммуникации в устной и письменной форме, включая
                понимание обращенной речи и построение собственного высказывания
              </Text2>
            </FlexColumn>
          </FlexRow>
        </Box>

        <Box mt={7}>
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
      </GridContainer>

      <FlexColumn>
        <Box mt={7} backgroundColor={PaletteColor.LightGreen}>
          <FlexRow>
            <StyledImg
              src={purplePuzzleTranslucent}
              margin="0 0 0 20px"
              position="relative"
              top="-30px"
            />
            <Text1 mt={4} mb={4} ml={4} mr={4} textColor={TextColor.Primary}>
              Когнитивное здоровье - способность четко мыслить, учиться и
              помнить. Эти способности важны для повседневной жизни, выполнения
              задач. Когнитивные функции помогают адаптироваться к новым
              условиям, пользоваться имеющимися знаниями.
            </Text1>
          </FlexRow>
        </Box>
      </FlexColumn>

      <FlexColumn>
        <Box mt={7}>
          <TwoColumnSection>
            <Box mt={8} mr={8}>
              <Subtitle1>КОГНИТИВНЫЕ РАССТРОЙСТВА</Subtitle1>
              <Subtitle3 mt={2}>Что это такое?</Subtitle3>
            </Box>
            <Container
              size={ContainerSize.MediumSmall}
              bgColor={BackgroundColor.Alt2}
            >
              <Text1
                mt={4}
                mb={4}
                ml={4}
                mr={4}
                textColor={TextColor.Secondary}
              >
                <strong>Когнитивные расстройства</strong> - когнитивных функций
                (внимания, памяти, речи, восприятия, восприятия, праксиса,
                управляющих функций) по сравнению с исходным индивидуальным
                и/или средними возрастными и образовательными уровнями
                вследствие патологии головного мозга и нарушения его функций,
                влияющее на эффективность обучения, профессиональной, социальной
                и бытовой деятельности.
              </Text1>
            </Container>
          </TwoColumnSection>
        </Box>
      </FlexColumn>

      <FlexColumn>
        <Box mt={7}>
          <FlexRow>
            <FlexColumn padding={`0 30px 0 0`} alignItems={`center`}>
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
                    когнитивные нарушения могут вызывать обеспокоенность
                    человека и снижение качества его жизни
                  </Text1>
                </li>
              </List>
            </FlexColumn>
            <FlexColumn
              padding={`0 30px`}
              borderLeftRight={true}
              alignItems={`center`}
            >
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
            </FlexColumn>
            <FlexColumn padding={`0 0 0 30px`} alignItems={`center`}>
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
            </FlexColumn>
          </FlexRow>
        </Box>
      </FlexColumn>

      <Section>
        <Box mt={6} backgroundColor={PaletteColor.DarkPurple}>
          <FlexColumn maxWidth="100%">
            <FlexRow>
              <FlexColumn>
                <Subtitle1 mt={7} textColor={TextColor.Secondary}>
                  ГОЛОВНОЙ МОЗГ
                </Subtitle1>
                <Subtitle3 mt={1} mb={6} textColor={TextColor.Secondary}>
                  КАК ОН УСТРОЕН
                </Subtitle3>
              </FlexColumn>
            </FlexRow>
          </FlexColumn>
        </Box>
      </Section>
    </>
  );
};

export default Details;
