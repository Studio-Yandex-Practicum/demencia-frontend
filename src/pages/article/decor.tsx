import styled from "styled-components";
import { ScreenSize } from "../../ui/types";

export const PurplePuzzle = styled.img`
  width: 100px;
  height: 96px;
  bottom: 0;
  right: 7.5%;
  position: absolute;
  z-index: 2;

  @media (max-width: ${ScreenSize.Small}px) {
    bottom: 3%;
    width: 60px;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    visibility: hidden;
  }
`;

export const GreenPuzzle = styled.img`
  width: 10.1%;
  height: 9.6%;
  top: -6%;
  right: -5%;
  position: absolute;

  @media (max-width: ${ScreenSize.Large}px) {
    width: 5.1%;
    top: -5.5%;
    right: -2%;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    width: 10.1%;
    top: -5.5%;
    right: -4.5%;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    width: 6.1%;
    top: -5%;
    right: -2%;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    top: -5%;
    right: -3%;
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    top: -4%;
    right: -3%;
  }
`;

export const PurpleSemicircle = styled.img`
  width: 10%;
  height: 18%;
  margin-top: -10em;
  margin-right: 2em;
  margin-left: 6em;
  z-index: 1;

  @media (max-width: ${ScreenSize.Large}px) {
    margin-top: -8em;
    margin-right: 2em;
    margin-left: 7em;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    margin-top: -6em;
    margin-left: 5em;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    width: 18%;
    margin-left: 4em;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    margin-top: 2em;
    margin-right: 1em;
    margin-left: 1em;
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    margin-top: 1em;
  }
`;

export const ArticleBackground = styled.div`
  position: absolute;
  margin-top: 2em;
  background-color: ${(p) => p.theme.colors.backgroundAlt3};
  width: 100%;
  height: 400px;
  z-index: -1;
  padding: 0 32px;
  
  @media (max-width: ${ScreenSize.XXSmall}px) {
    height: 360px;
    
`;
