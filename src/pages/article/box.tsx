import styled, { css } from "styled-components";
import { Box } from "../../ui/controls";
import { buildTransitionFaster } from "../../ui/controls/mixins";
import { ScreenSize } from "../../ui/types";

export const ArticleItemBox = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 40px 50px 20px 50px;

  @media (max-width: ${ScreenSize.XSmall}px) {
    padding: 40px 30px 20px 30px;
  }

  @media (max-width: ${ScreenSize.XXSmall}px) {
    padding: 20px;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 50%;
  margin: 0 auto;

  @media (max-width: ${ScreenSize.Medium}px) {
    max-width: 80%;
  }

  @media (max-width: ${ScreenSize.Small}px) {
    max-width: 100%;
  }
`;

// export const DescriptionBox = styled.div`
//   position: relative;
//   box-sizing: border-box;
//   display: flex;
//   flex-direction: row;
//   margin: auto;
//   padding-left: 150px;
//   max-width: 50%;
//   width: 100%;
//   min-height: 90px;
//
//   @media (max-width: ${ScreenSize.Medium}px) {
//     max-width: 80%;
//     padding-left: 130px;
//   }
//
//   @media (max-width: ${ScreenSize.Small}px) {
//     padding-left: 120px;
//     max-width: 100%;
//   }
//
//   @media (max-width: ${ScreenSize.XSmall}px) {
//     padding: 0 0 0 100px;
//   }
// `;

export const ArticleTextBox = styled(Box)<{ centered?: boolean }>`
  display: flex;
  ${buildTransitionFaster("all")}
  @media (max-width: ${ScreenSize.XSmall}px) {
    ${(p) => {
      if (p.centered) {
        return css`
          justify-content: center;
        `;
      }
    }}
    width: 100%;
    max-width: 100%;
  }
`;
