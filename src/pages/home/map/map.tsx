import React from "react";
import styled from "styled-components";
import { Title, Subtitle4 } from "../../../ui/controls/typography";
import { Box } from "../../../ui/controls";
import { Section } from "../../../ui/controls/layout";
import { ScreenSize, TextColor } from "../../../ui/types";
import { useQuery } from "@apollo/client";
import { SettingsData } from "../../../types/settings";
import { GET_SETTINGS } from "../../../gql/query/settings";
import ImageOfMap from "./map-base-layer";
import MapOverlay from "./map-overlay";

const StyledTitle = styled(Title)`
  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 30px;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 23px;
  }
`;

const StyledText = styled(Subtitle4)`
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
  width: 100%;
  height: 100%;
  @media (max-width: ${ScreenSize.Small}px) {
    margin-left: 32px;
    margin-right: 32px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin: 0;
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

  if (!sectionTitle.length) return <DefaultCaption title="куда идти?" />;

  if (!subtitle.length)
    return <DefaultCaption title="карта центров профилактики" />;

  return (
    <Section id="map" mt={4}>
      <TextWrapper ml={6}>
        <StyledTitle>{sectionTitle}</StyledTitle>
      </TextWrapper>
      <TextWrapper ml={6}>
        <StyledText textColor={TextColor.Shadow}>{subtitle}</StyledText>
      </TextWrapper>
      <MapWrapper ml={6} mr={6}>
        <MapOverlay />
        <ImageOfMap />
      </MapWrapper>
    </Section>
  );
};

export default Map;
