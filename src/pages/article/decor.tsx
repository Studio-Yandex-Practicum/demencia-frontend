import styled from "styled-components";
import { Link } from "../../ui/controls";
import { ScreenSize } from "../../ui/types";

export const PurplePuzzle = styled.img`
  width: 70px;
  bottom: 20px;
  right: 7.5%;
  position: absolute;
  z-index: 3;

  @media (max-width: ${ScreenSize.Small}px) {
    width: 50px;
    bottom: 10px;
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    visibility: hidden;
  }
`;

export const GreenPuzzle = styled.img`
  width: 50px;
  top: -30px;
  right: -25px;
  position: absolute;
  object-fit: contain;
  object-position: center;

  @media (max-width: ${ScreenSize.Large}px) {
    width: 50px;
    top: -30px;
    right: -25px;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    width: 40px;
    top: -25px;
    right: -20px;
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    width: 25px;
    top: -15px;
    right: -10px;
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
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  object-position: center;
`;

export const ArticleLink = styled(Link)`
  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 16px;
  }
`;
