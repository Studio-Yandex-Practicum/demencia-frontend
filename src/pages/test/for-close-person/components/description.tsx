import { Box, Text1 } from "../../../../ui/controls";
import { TextColor } from "../../../../ui/types";

const TestDescription = () => {
  return (
    <Box pt={3} pb={3}>
      <Text1 maxWidth={1026} mb={1} textColor={TextColor.Primary}>
        Для того, чтобы оценить потребность близкого для вас человека в помощи,
        в связи с имеющимися у него проблемами с памятью, пожалуйста, ответьте
        на следующие вопросы.
      </Text1>
    </Box>
  );
};

export default TestDescription;
