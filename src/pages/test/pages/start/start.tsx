import styled from "styled-components";
import {
  Box,
  Container,
  Section,
  Subtitle3,
  Text1,
} from "../../../../ui/controls";
import { ContainerSize, ScreenSize, TextColor } from "../../../../ui/types";
import Puzzles from "../../../../components/puzzles";
import GreenPuzzle from "../../../../components/green-puzzle";
import { BackgroundColor } from "../../../../ui/types/background-color.enum";
import largeHalfCircle from "../../../../images/large-half-circle.svg";
import ButtonWithSemicircle from "../../../../components/button-with-semicircle";
import { Link } from "react-router-dom";
const StyledInfoSection = styled(Section)`
  transform: translateY(-100px);
  margin-bottom: -120px;
  @media (max-width: 1300px) {
    margin-bottom: 0;
    transform: translateY(0);
  }
`;

const StyledTestSection = styled(Section)`
  @media (max-width: ${ScreenSize.Small}px) {
    padding-top: 16px;
  }
`;

const StyledContainer = styled(Container)`
  align-self: flex-end;
  align-items: center;
  justify-content: center;
  @media (max-width: 1300px) {
    max-width: 100%;
  }
`;

const StyledPuzzles = styled(Puzzles)`
  width: 230px;
  margin-top: 0;
  position: absolute;
  left: 0;
  margin-left: -300px;
  @media (max-width: ${ScreenSize.Large}px) {
    margin-left: -210px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    display: none;
  }
`;

const StyledGreenPuzzle = styled(GreenPuzzle)`
  width: 99px;
  height: auto;
  right: 0;
  top: 0;
  margin-right: -120px;
  @media (max-width: ${ScreenSize.Large}px) {
    margin-right: -80px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    display: none;
  }
`;

const StyledBox = styled(Box)`
  position: relative;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`;

const StyledTestBox = styled(Box)`
  text-align: center;
  align-items: center;
`;

const StyledImg = styled.img`
  position: absolute;
  right: 0;
  height: 280px;
  @media (max-width: 1300px) {
    height: 450px;
  }
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    display: none;
  }
`;

const StyledButtonWithSemicircle = styled(ButtonWithSemicircle)`
  @media (max-width: ${ScreenSize.Medium}px) {
    max-width: 100%;
  }
`;

const StyledText1Container = styled(Text1)`
  line-height: 1;
`;

const StyledText1 = styled(Text1)`
  line-height: 1;
  @media (max-width: ${ScreenSize.Medium}px) {
    max-width: 100%;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    margin-top: 60px;
  }
`;

const StyledBoxContainer = styled(Box)`
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    padding: 30px 20px;
  }
`;

const StartPage = () => {
  return (
    <Box>
      <StyledInfoSection flex>
        <StyledContainer
          size={ContainerSize.Medium}
          bgColor={BackgroundColor.Alt3}
        >
          <StyledBoxContainer pt={3} pr={18} pb={3} pl={3}>
            <StyledText1Container mb={3} textColor={TextColor.Primary}>
              Когнитивные способности напрямую связаны с работой различных
              отделов мозга. &nbsp; Их функционирование обеспечивает нашу
              продуктивность и выполнение различных задач в повседневной жизни.
            </StyledText1Container>
            <StyledText1Container mb={3} textColor={TextColor.Primary}>
              С возрастом работа отделов мозга становится менее эффективной,
              поэтому наблюдение за своим когнитивным состоянием и состоянием
              своих близких дает возможность раннего диагностирования
              когнитивных нарушений.
            </StyledText1Container>
            <StyledText1Container textColor={TextColor.Primary}>
              Это позволяет замедлить прогрессирование симптомов когнитивных
              расстройств, избежать их хронического характера и как можно раньше
              начать лечение.
            </StyledText1Container>
          </StyledBoxContainer>
          <StyledImg src={largeHalfCircle} />
        </StyledContainer>
      </StyledInfoSection>

      <StyledTestSection flex centered borderBox pt={12}>
        <StyledTestBox flex column>
          <Subtitle3 maxWidth={749} mb={4} textColor={TextColor.Primary}>
            Данный тест рекомендуется пройти для проверки своего когнитивного
            статуса.
          </Subtitle3>
          <StyledBox flex>
            <StyledPuzzles />
            <StyledTestBox flex column>
              <Link to="/test/description">
                <StyledButtonWithSemicircle
                  maxWidth={350}
                  buttonText="Начать тестирование"
                />
              </Link>
              <StyledText1 maxWidth={500} mt={10}>
                Тест рекомендуется использовать в качестве дополнения к
                профессиональной врачебной диагностике, а не в качестве её
                замены.
              </StyledText1>
            </StyledTestBox>
            <StyledGreenPuzzle animated={false} />
          </StyledBox>
        </StyledTestBox>
      </StyledTestSection>
    </Box>
  );
};

export default StartPage;
