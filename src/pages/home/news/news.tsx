import React from "react";
import styled from "styled-components";
import { Section } from "../../../ui/controls/layout";
import { Container, Box, Grid } from "../../../ui/controls";
import { ContainerSize, PaletteColor, ScreenSize } from "../../../ui/types";
import { BackgroundColor } from "../../../ui/types/background-color.enum";
import { Title, Text3 } from "../../../ui/controls/typography";
import Card from "../../../components/card";
import defaultImage from "../../../images/default-image.png";

const StyledContainer = styled(Container)`
  align-items: flex-end;
  @media (max-width: ${ScreenSize.XSmall}px) {
    align-items: center;
  }
`;

const News: React.FC = () => {
  return (
    <Section
      flex
      centered
      pt={3}
      backgroundColor={PaletteColor.LightGreen}
      borderBox
    >
      <StyledContainer size={ContainerSize.Large}>
        <Box>
          <Title>Что нового?</Title>
        </Box>
        <Box mb={5}>
          <Text3>Перейти к ленте новостей</Text3>
        </Box>
      </StyledContainer>
      <Container size={ContainerSize.Large} bgColor={BackgroundColor.Alt1}>
        <Grid mt={10} zIndex={2} pl={5} pr={5}>
          <Card
            key={1}
            cardHeading="Заголовок новости"
            cardText="{article.subTitle}"
            cardDateTime="{article.createdAt}"
            cardDateTimeText="Дата новости"
            imageSource={defaultImage}
            cardLinkTo="/article/"
          />
          <Card
            key={1}
            cardHeading="Заголовок новости"
            cardText="{article.subTitle}"
            cardDateTime="{article.createdAt}"
            cardDateTimeText="Дата новости"
            imageSource={defaultImage}
            cardLinkTo="/article/"
          />
          <Card
            key={1}
            cardHeading="Заголовок новости"
            cardText="{article.subTitle}"
            cardDateTime="{article.createdAt}"
            cardDateTimeText="Дата новости"
            imageSource={defaultImage}
            cardLinkTo="/article/"
          />
        </Grid>
      </Container>
    </Section>
  );
};

export default News;
