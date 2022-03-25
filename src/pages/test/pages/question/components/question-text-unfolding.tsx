import styled from "styled-components";
import { Box, Section, Text3 } from "../../../../../ui/controls";
import {
  ScreenSize,
  TextColor,
  TypographyLevel,
} from "../../../../../ui/types";

const StyledSection = styled(Section)`
  display: block;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    max-width: 600px;
  }
`;

const StyleText3 = styled(Text3)`
  margin: 0 auto;
  @media (max-width: ${ScreenSize.MediumSmall}px) {
    font-size: 16px;
    margin: 0 40px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin: 0 30px;
  }
`;

const QuestionTextUnfolding: React.FC = () => {
  return (
    <Box>
      <StyledSection>
        <StyleText3
          maxWidth={860}
          textColor={TextColor.Primary}
          level={TypographyLevel.Text1}
        >
          1. С помощью доступных электронных устройств сфотографируйте ваш
          рисунок.
        </StyleText3>
        <StyleText3
          maxWidth={860}
          textColor={TextColor.Primary}
          level={TypographyLevel.Text1}
        >
          2. Любым доступным способом перенесите фотографию на компьютер, с
          которого Вы проходите тестирование: перемещение с помощью USB
          накопителя. перемещение с помощью проводного подключения устройства.
        </StyleText3>
        <StyleText3
          maxWidth={860}
          textColor={TextColor.Primary}
          level={TypographyLevel.Text1}
        >
          3. Нажмите на кнопку «ДОБАВИТЬ ФАЙЛ» и выберите фотографию рисунка в
          перечне файлов на компьютере или в галерее снимков смартфона/планшета.
        </StyleText3>
      </StyledSection>
    </Box>
  );
};

export default QuestionTextUnfolding;
