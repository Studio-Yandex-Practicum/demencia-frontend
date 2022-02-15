import React from "react";
import styled from "styled-components";
import { Section } from "../../../ui/controls/layout";
import { Container, Box } from "../../../ui/controls";
import { ContainerSize, PaletteColor, ScreenSize } from "../../../ui/types";
import { Title, Text3 } from "../../../ui/controls/typography";
import { Link } from "../../../ui/controls";
import Slider from "./slider";
import { useQuery } from "@apollo/client";
import { SettingsData } from "../../../types/settings";
import { GET_SETTINGS } from "../../../gql/query/settings";
import AnimationWrapper from "../../../components/animation-wrapper";

const StyledContainer = styled(Container)`
  align-items: flex-end;
  align-self: end;
  margin-right: 6vw;
  @media (max-width: ${ScreenSize.Small}px) {
    align-items: center;
    margin-right: 0;
  }
`;

const StyledSection = styled(Section)<{
  minHeight?: string;
  height?: string;
}>`
  min-height: ${(props) => props.minHeight};
  height: ${(props) => props.height};
  @media (max-width: ${ScreenSize.Large}px) {
    height: 680px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    height: 645px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    height: 575px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    height: 525px;
  }
  @media (max-width: ${ScreenSize.XXSmall}px) {
    height: 450px;
  }
`;

const StyledBox = styled(Box)`
  @media (max-width: ${ScreenSize.Medium}px) {
    padding-bottom: 48px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    padding: 16px 56px;
    width: 100%;
  }
`;

const StyledTitle = styled(Title)`
  transition: all 1s ease;
  ${({ animate }) =>
    animate ? "opacity: 0; transform: translateY(100px);" : ""}

  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 30px;
  }
`;

const StyledText3 = styled(Text3)`
  font-size: 18px !important;
`;

const DefaultCaption: React.FC<{ title: string }> = ({ title }) => <>{title}</>;

const News: React.FC = () => {
  const { data } = useQuery<SettingsData>(GET_SETTINGS, {
    fetchPolicy: "cache-first",
  });

  if (!data || !data.settings.newsSection)
    return <DefaultCaption title="Что нового?" />;

  if (!data || !data.settings.newsSectionUrlLabel)
    return <DefaultCaption title="Перейти к ленте новостей" />;

  const sectionTitle = data.settings.newsSection;
  const linkTitle = data.settings.newsSectionUrlLabel;

  if (!sectionTitle.length) return <DefaultCaption title="Что нового?" />;
  if (!linkTitle.length)
    return <DefaultCaption title="Перейти к ленте новостей" />;

  return (
    <StyledSection id="news" flex centered height="735px">
      <StyledSection
        flex
        centered
        pt={3}
        pr={3}
        backgroundColor={PaletteColor.LightGreen}
        borderBox
        minHeight="90%"
      >
        <StyledContainer size={ContainerSize.Large}>
          <Box>
            <AnimationWrapper>
              <StyledTitle>{sectionTitle}</StyledTitle>
            </AnimationWrapper>
          </Box>
          <Box mb={5}>
            <Link to="/news-grid">
              <StyledText3 zoomOnHover>{linkTitle}</StyledText3>
            </Link>
          </Box>
        </StyledContainer>
      </StyledSection>
      <StyledBox
        width="calc(100% - 48px)"
        pt={6}
        pl={12}
        pb={12}
        pr={12}
        backgroundColor={PaletteColor.DarkPurple}
        absolute
        bottom="0"
      >
        <Slider />
      </StyledBox>
    </StyledSection>
  );
};

export default News;
