import React from "react";
import { Section } from "../../ui/controls";
import { Box, Button, Container } from "../../ui/controls";
import {
  ButtonType,
  ContainerSize,
  ScreenSize,
  TextColor,
  TypographyLevel,
} from "../../ui/types";
import { BackgroundColor } from "../../ui/types/background-color.enum";
import { Subtitle3, Text1 } from "../../ui/controls";
import { Pazzles, GreenPuzzle } from "../home/hero/test/decor";
import styled from "styled-components";

const StyledSection = styled(Section)`
  transform: translateY(-110px);
  margin-bottom: -120px;
  @media (max-width: ${ScreenSize.Medium}px) {
    margin-bottom: 0;
    transform: translateY(0);
  }
  @media (max-width: ${ScreenSize.Small}px) {
    margin-bottom: -200px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-bottom: -300px;
  }
`;

const StyledContainer = styled(Container)`
  align-self: flex-end;
`;

const StyledPazzles = styled(Pazzles)`
  width: 230px;
  margin-top: 0;
  position: absolute;
  left: 0;
  margin-left: -120px;
`;

const StyledGreenPuzzle = styled(GreenPuzzle)`
  width: 99px;
  right: 0;
  top: 0;
  position: absolute;
`;

const StyledBox = styled(Box)`
  position: relative;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;

const StyledTestBox = styled(Box)`
  text-align: center;
`;

const TestingPage: React.FC = () => {
  return (
    <>
      <Box>
        <StyledSection flex>
          <StyledContainer
            size={ContainerSize.Medium}
            bgColor={BackgroundColor.Alt3}
          >
            <Box pt={3} pr={18} pb={3} pl={3}>
              <Text1 mb={3} textColor={TextColor.Primary}>
                Когнитивные способности напрямую связаны с работой различных
                отделов мозга. &nbsp; Их функционирование обеспечивает нашу
                продуктивность и выполнение различных задач в повседневной
                жизни.
              </Text1>
              <Text1 mb={3} textColor={TextColor.Primary}>
                С возрастом работа отделов мозга становится менее эффективной,
                поэтому наблюдение за своим когнитивным состоянием и состоянием
                своих близких дает возможность раннего диагностирования
                когнитивных нарушений.
              </Text1>
              <Text1 textColor={TextColor.Primary}>
                Это позволяет замедлить прогрессирование симптомов когнитивных
                расстройств, избежать их хронического характера и как можно
                раньше начать лечение.
              </Text1>
            </Box>
            {/* <StyledImg src={greenSemicirclePic} /> */}
          </StyledContainer>
        </StyledSection>

        <Section flex centered borderBox pt={7}>
          <StyledTestBox flex column>
            <Subtitle3 maxWidth={749} textColor={TextColor.Primary}>
              Данный тест рекомендуется пройти для проверки своего когнитивного
              статуса.
            </Subtitle3>
            <StyledBox flex>
              <StyledPazzles />
              <Box>
                <Button
                  type={ButtonType.Primary}
                  width={330}
                  level={TypographyLevel.Subtitle3}
                >
                  Начать тестирование
                </Button>
                <Text1 maxWidth={500} mt={5}>
                  Тест рекомендуется использовать в качестве дополнения к
                  профессиональной врачебной диагностике, а не в качестве её
                  замены.
                </Text1>
              </Box>

              <StyledGreenPuzzle />
            </StyledBox>
          </StyledTestBox>
        </Section>
      </Box>
    </>
  );
};

export default TestingPage;
