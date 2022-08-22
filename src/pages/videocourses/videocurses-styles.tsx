import { Subtitle1, Text2, Box } from "../../ui/controls";
import styled from "styled-components";
import { ScreenSize } from "../../ui/types";

export const List = styled.ul<{
  color?: string;
}>`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;
`;

export const StyledBox = styled(Box)`
  @media (max-width: ${ScreenSize.Large}px) {
    & {
      max-width: 600px;
    }
  }
`;

export const StyledSubtitle1 = styled(Subtitle1)`
  font-size: 45px;
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

export const StyledText2 = styled(Text2)`
  text-align: center;
  font-size: 16px;

  @media (max-width: ${ScreenSize.Small}px) {
    & {
      text-align: left;
    }
  }
`;

export const StyledTextStrong = styled(Text2)`
  text-align: center;
  font-size: 16px;

  @media (max-width: ${ScreenSize.Small}px) {
    & {
      text-align: left;
      font-weight: 700;
    }
  }
`;

export const StyledText2Strong = styled.p`
  font-weight: 700;
  display: inline;
`;

export const StyledTextForList = styled(Text2)`
  text-align: left;
  font-size: 16px;
  // padding-left: 20px;
`;

export const StyledList = styled.ul`
  padding-left: 20px;
  margin: 0;
`;

export const StyledImage = styled.img<{
  puzzleType: string;
  animate?: boolean;
}>`
  z-index: 1;
  position: absolute;
  object-fit: contain;
  width: 60px;
  height: 60px;
  right: 180px;
  top: 0;

  @media (max-width: ${ScreenSize.Large}px) {
    & {
      top: 10px;
      left: 10px;
    }
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    & {
      right: 200px;
      top: 30px;
    }
  }

  @media (max-width: ${ScreenSize.MediumSmall}px) {
    & {
      display: none;
    }
  }
`;
