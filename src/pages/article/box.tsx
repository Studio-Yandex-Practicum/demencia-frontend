import styled from "styled-components";
import { ScreenSize } from "../../ui/types";

export const ArticleItemBox = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 130px 20px 20px 20px;

  @media (max-width: ${ScreenSize.Large}px) {
    max-width: 1080px;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    max-width: 880px;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    max-width: 600px;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    padding: 130px 0 20px 0;
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    max-width: 300px;
    padding: 50px 8px 8px 0;
  }
`;

export const ImageBox = styled.div`
  position: relative;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: auto;
  max-width: 1440px;
`;
