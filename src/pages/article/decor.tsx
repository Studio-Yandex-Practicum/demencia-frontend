import styled from "styled-components";
import { Link } from "../../ui/controls";
import { ScreenSize } from "../../ui/types";

export const PurplePuzzle = styled.img`
  width: 80px;
  bottom: 5px;
  right: 7.5%;
  position: absolute;
  z-index: 3;

  @media (max-width: ${ScreenSize.Small}px) {
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
    right: 1%;
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    top: -4%;
    right: 3%;
  }
`;

export const PurpleSemicircle = styled.img`
  position: absolute;
  top: -100px;
  left: 25px;
  width: 100px;
  z-index: 1;

  @media (max-width: ${ScreenSize.Large}px) {
    top: -90px;
    width: 90px;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    top: -80px;
    width: 80px;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    top: -70px;
    width: 70px;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    top: -60px;
    width: 60px;
  }
`;

export const ArticleBackground = styled.div`
  position: absolute;
  background-color: ${(p) => p.theme.colors.backgroundAlt3};
  width: 100%;
  height: 50%;
  z-index: -1;

  @media (max-width: ${ScreenSize.XXSmall}px) {
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
  object-fit: contain;
  object-position: center;
`;

export const ArticleLink = styled(Link)`
  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 16px;
  }
`;
