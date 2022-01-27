import styled from "styled-components";
import { ScreenSize } from "../../ui/types";

export const MainTitleArticle = styled.div`
  color: #6d097a;
  text-transform: uppercase;
  font-size: 60px;
  line-height: 1.15;
  font-style: normal;
  font-weight: 600;
  margin: 60px auto;
  text-align: center;
  padding: 0 20px;

  @media (max-width: ${ScreenSize.Large}px) {
    font-size: 42px;
    margin: 45px auto;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 36px;
    margin: 35px auto;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 24px;
    margin: 15px auto;
  }
`;

export const ArticleDate = styled.p`
  max-width: fit-content;
  color: #5b5b5b;
  font-size: 32px;
  line-height: 2.15;
  font-weight: 600;
  border-top: 3px solid #5b5b5b;
  margin: auto;
  text-align: center;

  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 28px;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 18px;
  }
`;
