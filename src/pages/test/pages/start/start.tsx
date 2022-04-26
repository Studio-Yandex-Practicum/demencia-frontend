import React from "react";
import { Box } from "../../../../ui/controls";
import { ContainerSize, TextColor } from "../../../../ui/types";
import { BackgroundColor } from "../../../../ui/types/background-color.enum";
import largeHalfCircle from "../../../../images/large-half-circle.svg";
import { useNavigate } from "react-router-dom";
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
  Actions,
} from "./start-styles";
import { AppContext } from "../../../../components/contexts";
import { useContext, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import { NewTest } from "../../../../types/newTest";
import { NEW_TEST } from "../../../../gql/query/newTest";
import { toast } from "react-hot-toast";

const StartPage = () => {
  const [getTestId, {}] = useLazyQuery<NewTest>(NEW_TEST);
  const { setLastQuestionId } = useContext(AppContext);
  const navigate = useNavigate();

  const onStartBtnClick = () => {
    getTestId()
      .then((res) => {
        localStorage.setItem("test_id", JSON.stringify(res.data?.newTest));
        if (setLastQuestionId) {
          setLastQuestionId(`description`);
          navigate(`/test/description`);
        }
      })
      .catch(() => toast.error(`Не удалось начать тест`, { id: "error" }));
  };

  useEffect(() => {
    if (setLastQuestionId) {
      setLastQuestionId(`start`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box mb={5}>
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

      <StyledTestSection flex centered borderBox pt={8}>
        <StyledTestBox flex column>
          <StyledSubtitle3 maxWidth={749} mb={7} textColor={TextColor.Primary}>
            Данный тест рекомендуется пройти для проверки своего когнитивного
            статуса.
          </StyledSubtitle3>
          <StyledBox flex>
            <StyledPuzzles />
            <StyledTestBox flex column>
              <Actions>
                <StyledButtonWithSemicircle
                  maxWidth={350}
                  buttonText="Начать тестирование"
                  onClick={onStartBtnClick}
                />
              </Actions>
              <StyledText1 maxWidth={500} mt={7}>
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
