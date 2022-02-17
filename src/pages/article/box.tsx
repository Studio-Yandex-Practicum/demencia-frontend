import styled from "styled-components";
import { Box } from "../../ui/controls";
import { ScreenSize } from "../../ui/types";

export const ArticleItemBox = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 40px 20px 20px 20px;

  @media (max-width: ${ScreenSize.XSmall}px) {
    padding: 30px 0 20px 0;
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    padding: 20px 0;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 50%;
  margin: 0 auto;

  @media (max-width: ${ScreenSize.Medium}px) {
    max-width: 70%;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    max-width: 100%;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    padding: 0 16px;
  }
`;

export const DescriptionBox = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  margin: auto;
  padding-left: 140px;
  width: 100%;
  max-width: 50%;
  min-height: 90px;

  @media (max-width: ${ScreenSize.Medium}px) {
    max-width: 70%;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    padding-left: 120px;
    max-width: 100%;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    padding: 0 16px 0 100px;
  }
`;

export const ArticleTextBox = styled(Box)`
  display: flex;
  padding-left: 30px;
  @media (max-width: ${ScreenSize.XSmall}px) {
    padding: 0 15px;
    justify-content: center;
    width: 100%;
    max-width: 100%;
  }
`;
