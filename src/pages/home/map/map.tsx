import React from "react";
import styled from "styled-components";
import { Title, Subtitle4, Text3 } from "../../../ui/controls/typography";
import { Box } from "../../../ui/controls";
import { Section } from "../../../ui/controls";
import { ScreenSize, TextColor } from "../../../ui/types";
import { useQuery } from "@apollo/client";
import { SettingsData } from "../../../types/settings";
import { GET_SETTINGS } from "../../../gql/query/settings";
import BaseLayer from "./base-layer";
import { ReactComponent as MyMap } from "../../../images/map.svg";
import OverlayWrapper from "./overlay-wrapper";
import AnimationWrapper from "../../../components/animation-wrapper";
import SearchForm from "./search-form";
import icon from "../../../images/alert-icon.svg";

const StyledTitle = styled(Title)`
  transition: all 1s ease;
  ${({ animate }) =>
    animate ? "opacity: 0; transform: translateY(100px);" : ""}

  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 30px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 23px;
  }
`;

const StyledText = styled(Subtitle4)`
  transition: all 1s ease;
  ${({ animate }) =>
    animate ? "opacity: 0; transform: translateY(100px);" : ""}

  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 12px;
  }
`;

const TextWrapper = styled(Box)`
  @media (max-width: ${ScreenSize.Small}px) {
    margin-left: 32px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin: 0;
  }
`;

const MapWrapper = styled(Box)`
  position: relative;
  height: 100%;
  @media (max-width: ${ScreenSize.Small}px) {
    display: none;
  }
`;

const StyledBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const AlertIcon = styled.img.attrs((props) => ({
  src: props.src || icon,
  alt: props.alt || "",
}))`
  width: 80px;
  height: auto;
  margin: 0 20px;
  padding: 0;
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 60px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    width: 50px;
  }
`;

const DefaultCaption: React.FC<{ title: string }> = ({ title }) => <>{title}</>;

const Map: React.FC = () => {
  const { data } = useQuery<SettingsData>(GET_SETTINGS, {
    fetchPolicy: "cache-first",
  });

  if (!data || !data.settings.mapSection)
    return <DefaultCaption title="куда идти?" />;

  if (!data || !data.settings.mapSectionSubtitle)
    return <DefaultCaption title="карта центров профилактики" />;

  const sectionTitle = data.settings.mapSection;
  const subtitle = data.settings.mapSectionSubtitle;
  const sectionInfo = data.settings.mapSectionInfo;

  if (!sectionTitle.length) return <DefaultCaption title="куда идти?" />;

  if (!subtitle.length)
    return <DefaultCaption title="карта центров профилактики" />;

  if (!sectionInfo.length) return <></>;

  return (
    <Section id="map" mt={4}>
      <TextWrapper ml={6}>
        <AnimationWrapper>
          <StyledTitle ellipsis>{sectionTitle}</StyledTitle>
        </AnimationWrapper>
      </TextWrapper>
      <TextWrapper ml={6}>
        <AnimationWrapper>
          <StyledText textColor={TextColor.Shadow} ellipsis>
            {subtitle}
          </StyledText>
        </AnimationWrapper>
      </TextWrapper>
      <MapWrapper ml={6} mr={6}>
        <OverlayWrapper />
        <BaseLayer SVG={MyMap} />
      </MapWrapper>
      <SearchForm />
      <StyledBox>
        <AlertIcon />
        <Box maxWidth={750}>
          <Text3 textColor={TextColor.Shadow}>{sectionInfo}</Text3>
        </Box>
      </StyledBox>
    </Section>
  );
};

export default Map;
