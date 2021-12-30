import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../ui/controls";
import DetailedSection from "./detailed";

const StyledPageWithDatailed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  align-self: center;
`;

const PageWithDatailed: React.FC = () => {
  const [clicked, isClicked] = useState(false);
  return (
    <StyledPageWithDatailed>
      <Button mb={5} onClick={() => isClicked(!clicked)}>
        Подробнее
      </Button>
      {clicked ? <DetailedSection /> : ``}
    </StyledPageWithDatailed>
  );
};

export default PageWithDatailed;
