import React from "react";
import styled from "styled-components";

interface ImageProps {
  SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  width?: string;
  height?: string;
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const BaseLayer: React.FC<ImageProps> = (props: ImageProps) => {
  const { SVG } = props;

  return (
    <>
      <StyledContainer {...props}>
        <SVG />
      </StyledContainer>
    </>
  );
};

export default BaseLayer;
