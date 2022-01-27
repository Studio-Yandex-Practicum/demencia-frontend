import React from "react";
import styled from "styled-components";
import { Title, Subtitle4 } from "../../../ui/controls/typography";
import { Box } from "../../../ui/controls";
import { Section } from "../../../ui/controls/layout";
import { ScreenSize } from "../../../ui/types";
import interactiveMap from "../../../images/map.svg";

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
  @media (max-width: ${ScreenSize.Small}px) {
    margin-left: 32px;
    margin-right: 32px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin: 0;
  }
`;

const Map: React.FC = () => {
  return (
    <Section mt={4}>
      <TextWrapper ml={6}>
        <StyledTitle>куда идти?</StyledTitle>
      </TextWrapper>
      <TextWrapper ml={6}>
        <StyledText>карта центров профилактики</StyledText>
      </TextWrapper>
      <MapWrapper ml={6} mr={6}>
        <object type="image/svg+xml" data={interactiveMap} />
      </MapWrapper>
    </Section>
  );
};

export default Map;
