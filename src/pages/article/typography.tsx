import styled from "styled-components";
import { Subtitle2, Title } from "../../ui/controls/typography";
import { ScreenSize } from "../../ui/types";

export const MainTitleArticle = styled(Title)`
  color: #6d097a;
  text-transform: uppercase;
  font-size: 60px;
  line-height: 1.15;
  font-style: normal;
  font-weight: 600;
  margin: 30px auto;
  text-align: center;
  padding: 0 20px;

  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;

  @media (max-width: ${ScreenSize.Large}px) {
    font-size: 42px;
    margin: 25px auto;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 36px;
    margin: 20px auto;
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

export const DecorationText = styled(Subtitle2)`
  //margin-right: 10px;
  text-align: center;
  max-width: 50%;
  align-self: center;

  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;

  @media (max-width: ${ScreenSize.Large}px) {
    font-size: 22px;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 20px;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    font-size: 18px;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 14px;
  }
`;
