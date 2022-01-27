import React from "react";
import styled from "styled-components";
import { Title, Subtitle4 } from "../../../ui/controls/typography";
import { Box } from "../../../ui/controls";
import { Section } from "../../../ui/controls/layout";
import { ScreenSize } from "../../../ui/types";
import cursor from "../../../images/cursor_pointer.svg";
import interactiveMap from "../../../images/map.svg";

const StyledImage = styled.img.attrs((props) => ({
  src: props.src || interactiveMap,
  alt: props.alt || "",
}))`
  width: 100%;
  cursor: url(${cursor}), auto;
`;

const Map: React.FC = () => {
  return (
    <Section>
      <Box ml={6}>
        <Title>куда идти?</Title>
      </Box>
      <Box ml={6}>
        <Subtitle4>карта центров профилактики</Subtitle4>
      </Box>
      <Box ml={6} mr={6}>
        <StyledImage />
      </Box>
    </Section>
  );
};

export default Map;
