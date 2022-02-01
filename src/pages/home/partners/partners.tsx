import React from "react";
import styled from "styled-components";
import { Section } from "../../../ui/controls/layout";
import { Box } from "../../../ui/controls";
import { PaletteColor, ScreenSize, TextColor } from "../../../ui/types";
import { Title, Subtitle4 } from "../../../ui/controls/typography";
import Slider from "./slider";
import { useQuery } from "@apollo/client";
import { SettingsData } from "../../../types/settings";
import { GET_SETTINGS } from "../../../gql/query/settings";

const StyledSection = styled(Section)<{
  minHeight?: string;
  height?: string;
}>`
  min-height: ${(props) => props.minHeight};
  height: ${(props) => props.height};
`;

const StyledBox = styled(Box)`
  @media (max-width: ${ScreenSize.Small}px) {
    margin-left: 32px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-left: 0;
  }
`;

const StyledTitle = styled(Title)`
  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 23px;
  }
`;

const StyledText = styled(Subtitle4)`
  font-size: 18px !important;
  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 12px !important;
  }
`;

const StyledSliderWrapper = styled(Box)`
  @media (max-width: ${ScreenSize.Medium}px) {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DefaultCaption: React.FC<{ title: string }> = ({ title }) => <>{title}</>;

const Partners: React.FC = () => {
  const { data } = useQuery<SettingsData>(GET_SETTINGS, {
    fetchPolicy: "cache-first",
  });

  if (!data || !data.settings.partnersSection)
    return <DefaultCaption title="КТО С НАМИ?" />;
  if (!data || !data.settings.partnersSectionSubtitle)
    return <DefaultCaption title="Партнёры" />;

  const title = data.settings.partnersSection;
  const subTitle = data.settings.partnersSectionSubtitle;

  if (!title.length) return <DefaultCaption title="КТО С НАМИ?" />;
  if (!subTitle.length) return <DefaultCaption title="Партнёры" />;

  return (
    <StyledSection id="partners" flex flex-direction="column" centered>
      <Box width="100%" mt={4}>
        <StyledBox ml={6}>
          <StyledTitle textColor={TextColor.Accent1}>{title}</StyledTitle>
        </StyledBox>
        <StyledBox ml={6}>
          <StyledText textColor={TextColor.Shadow}>{subTitle}</StyledText>
        </StyledBox>
      </Box>
      <StyledSliderWrapper
        width="100%"
        pt={8}
        pl={12}
        pb={8}
        pr={12}
        backgroundColor={PaletteColor.Transparent}
        bottom="0"
      >
        <Slider />
      </StyledSliderWrapper>
    </StyledSection>
  );
};

export default Partners;
