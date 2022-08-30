import { FC } from "react";
import { Grid, Section } from "../../../ui/controls";
import frame1 from "../../../images/frame-1.jpg";
import frame2 from "../../../images/frame-2.jpg";
import frame3 from "../../../images/frame-3.jpg";
import frame4 from "../../../images/frame-4.jpg";
import frame5 from "../../../images/frame-5.jpg";
import frame6 from "../../../images/frame-6.jpg";
import frame7 from "../../../images/frame-7.jpg";
import frame8 from "../../../images/frame-8.jpg";
import { Subtitle1, Text1 } from "../../../ui/controls/typography";
import { ScreenSize, TextColor } from "../../../ui/types";
import styled from "styled-components";

const StyledGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, 340px);

  @media screen and (max-width: ${ScreenSize.Large}px) {
    grid-template-columns: repeat(auto-fit, 300px);
    gap: 40px 20px;
  }

  @media screen and (max-width: ${ScreenSize.Medium}px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 260px));
    gap: 40px;
  }

  @media screen and (max-width: ${ScreenSize.Small}px) {
    gap: 20px;
  }

  @media screen and (max-width: ${ScreenSize.XSmall}px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 220px));
    gap: 20px;
    padding-left: 0;
    padding-right: 0;
  }

  .partners__image {
    width: 100%;
  }
`;

const partnersImage = [
  frame1,
  frame2,
  frame3,
  frame4,
  frame5,
  frame6,
  frame7,
  frame8,
];

export const Partners: FC = () => {
  return (
    <Section flex mt={15} mb={7}>
      <Subtitle1 uppercase={false}>
        Видеокурс «Все о деменции за 60 минут»
      </Subtitle1>
      <Text1 textColor={TextColor.Shadow} mt={3}>
        был создан при поддержке и участии наших партнеров:
      </Text1>
      <StyledGrid mt={5} mb={9}>
        {partnersImage.map((image) => (
          <img className="partners__image" src={image} alt="partners" />
        ))}
      </StyledGrid>
      <Text1 mb={4}>
        Мы надеемся, что данные материалы дадут вам и вашим родным более широкое
        понимание о деменции, помогут легче справиться с принятием диагноза,
        расскажут, что необходимо предпринять в первую очередь, чтобы помочь
        пожилому человеку сохранить полноценную и самостоятельную активную
        жизнь, а также обеспечить достойный уход и лечение.
      </Text1>
      <Text1>
        <strong>
          Если у вас остались вопросы о деменции, напишите нам на
          info@деменция.net
        </strong>
      </Text1>
    </Section>
  );
};
