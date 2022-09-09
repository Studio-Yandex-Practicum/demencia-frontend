import { Box } from "../../../../ui/controls";
import { Text1, Text2 } from "../../../../ui/controls";
import { TextColor, TypographyLevel } from "../../../../ui/types";

const descriptionForMyself = (
  <Box pt={3} pb={3}>
    <Text2 maxWidth={1026} mb={2} textColor={TextColor.Primary}>
      Во время прохождения теста нельзя использовать калькулятор, календарь,
      часы. Вам необходимо сделать максимальное количество заданий.
    </Text2>
    <Text1 maxWidth={1026} mb={1} textColor={TextColor.Primary}>
      1. Для правильного прохождения вопросов с рисунками (2 вопроса в тесте) и
      корректной оценки результатов ответов по данным вопросам, связанных с
      распознаванием изображений, вам необходимо использовать:
    </Text1>
    <Text1
      maxWidth={1026}
      mb={1}
      textColor={TextColor.Primary}
      level={TypographyLevel.Subtitle4}
    >
      - белый лист бумаги, без клеток, неразлинованный, размер не менее А5
      (можно А4). Рисунок должен быть крупный, располагаться на всем размере
      листа или большей его части;
    </Text1>
    <Text1
      maxWidth={1026}
      mb={1}
      textColor={TextColor.Primary}
      level={TypographyLevel.Subtitle4}
    >
      - ручку черного цвета (ручка иных цветов или карандаш не будут распознаны
      системой).
    </Text1>
    <Text1 maxWidth={1026} mb={1} textColor={TextColor.Primary}>
      Вы также можете отредактировать фотографию рисунка и сделать ее
      черно-белой.
    </Text1>
    <Text1 maxWidth={1026} mb={1} textColor={TextColor.Primary}>
      2. Фото рисунка необходимо сделать сверху. Освещение должно быть
      максимально ярким (дневное, под лампой, без тени от устройства).
    </Text1>
    <Text1 maxWidth={1026} mb={1} textColor={TextColor.Primary}>
      3. Фотография должна содержать ТОЛЬКО тестируемый рисунок. Если в фотокадр
      попали не относящиеся к рисунку элементы, рекомендуется обрезать
      изображение или сделать новый снимок.
    </Text1>
  </Box>
);

export default descriptionForMyself;
