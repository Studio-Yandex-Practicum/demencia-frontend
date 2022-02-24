import { Box } from "../../../../ui/controls";
import { ContainerSize, TextColor } from "../../../../ui/types";
import { BackgroundColor } from "../../../../ui/types/background-color.enum";
import largeHalfCircle from "../../../../images/large-half-circle.svg";
import { Link } from "react-router-dom";
import {
  StyledBox,
  StyledBoxContainer,
  StyledButtonWithSemicircle,
  StyledContainer,
  StyledGreenPuzzle,
  StyledImg,
  StyledInfoSection,
  StyledPuzzles,
  StyledTestBox,
  StyledTestSection,
  StyledText1,
  StyledText1Container,
  StyledSubtitle3,
} from "./start-styles";

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
          <StyledSubtitle3 maxWidth={749} mb={10} textColor={TextColor.Primary}>
            Данный тест рекомендуется пройти для проверки своего когнитивного
            статуса.
          </StyledSubtitle3>
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
