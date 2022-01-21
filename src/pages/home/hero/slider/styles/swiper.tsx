import styled from "styled-components";

const StyledSwiper = styled.div`
  height: auto;
  max-height: 900px;
  transform: translateY(-120px);
  margin-left: 0 !important;
  margin-right: 0 !important;

  @media screen and (max-width: 640px) {
    top: 30% !important;
  }
`;

export default StyledSwiper;
