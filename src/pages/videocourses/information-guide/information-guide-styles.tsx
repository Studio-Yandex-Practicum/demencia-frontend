import {
  Subtitle1,
  Text2,
  Box,
  Link,
  ThreeColumnGrid,
} from "../../../ui/controls";
import { Subtitle4 } from "../../../ui/controls/typography";
import styled from "styled-components";
import { ScreenSize } from "../../../ui/types";

export const StyledSubtitle1 = styled(Subtitle1)`
  font-size: 46px;
  text-align: center;

  @media (max-width: ${ScreenSize.Large}px) {
    & {
      font-size: 35px;
    }
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    & {
      font-size: 30px;
    }
  }

  @media (max-width: ${ScreenSize.Small}px) {
    & {
      font-size: 21px;
    }
  }
`;

export const StyledSubtitle4 = styled(Subtitle4)`
  font-weight: 700;
  font-size: 20px;
  text-transform: none;
  padding: 27px 30px;
  line-height: 1.35;

  @media (max-width: ${ScreenSize.Large}px) {
    & {
      font-size: 18px;
    }
  }

  @media (max-width: ${ScreenSize.MediumSmall}px) {
    & {
      font-size: 16px;
    }
  }
`;

export const StyledBox = styled(Box)`
  @media (max-width: ${ScreenSize.Medium}px) {
    & {
      flex-direction: column;
    }
  }
`;

export const StyledCardBox = styled(Box)`
  background-color: #cae6df;
  max-width: 576px;

  @media (max-width: ${ScreenSize.Medium}px) {
    & {
      max-width: none;
    }
  }
`;

export const StyledThreeColumnGrid = styled(ThreeColumnGrid)`
  gap: 40px;
  @media (max-width: ${ScreenSize.Large}px) {
    & {
      gap: 20px;
    }
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    & {
      gap: 40px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${ScreenSize.MediumSmall}px) {
    & {
      gap: 20px;
    }
  }

  @media (max-width: ${ScreenSize.XSmall}px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export const StyledLink = styled(Link)`
  background-color: #00926f;
  border-radius: 60px;
  text-decoration: none;
  height: 60px;
  min-width: 200px;
  display: flex;
  align-items: center;
  margin: 10px 20px 10px 200px;

  @media (max-width: ${ScreenSize.Large}px) {
    & {
      margin: 10px 20px 10px 160px;
    }
  }

  @media (max-width: ${ScreenSize.Small}px) {
    & {
      min-width: 140px;
    }
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    & {
      margin: 20px;
    }
  }
`;

export const StyledCardLink = styled(StyledLink)`
  min-width: min-content;
  height: 45px;
  width: 120px;
  display: flex;
  align-items: center;
  margin: 0 30px 27px;

  @media (max-width: ${ScreenSize.MediumSmall}px) {
    & {
      width: 100px;
    }
  }
`;

export const StyledText2 = styled(Text2)`
  text-align: left;
  font-size: 18px;
  @media (max-width: ${ScreenSize.Medium}px) {
    & {
      text-align: center;
    }
  }
`;

export const StyledLinkText = styled(Text2)`
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
`;

export const StyledCardLinkText = styled(StyledLinkText)`
  font-size: 14px;
`;
