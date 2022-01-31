import { Section } from "../../../ui/controls";
import { ScreenSize } from "../../../ui/types";
import styled from "styled-components";

export const StyledAboutFundSection = styled(Section)`
  padding: 100px 0;
  margin-bottom: 150px;

  .about-fund-section__title {
    max-width: 40%;
    width: 100%;
    text-align: left;
    font-size: 60px;
  }

  .about-fund-section__text {
    max-width: 40%;
    width: 100%;
    text-align: right;
  }

  .about-fund-section__foundation-button {
    width: 400px;
  }

  .about-fund-section__white-puzzle {
    position: absolute;
    top: -5px;
    left: -5px;
    max-width: 22%;
  }

  .about-fund-section__flower-box {
    position: absolute;
    top: 0;
    left: 75%;
    padding: 30px;
    width: 240px;
  }

  .about-fund-section__purple-semicircle {
    position: absolute;
    bottom: -245px;
    left: calc(50% - 110px);
    width: 220px;
    transform: rotate(-90deg);
  }

  .about-fund-section__light-green-puzzle {
    position: absolute;
    bottom: -120px;
    left: 80%;
    width: 90px;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    padding: 100px 50px 50px 45%;

    .about-fund-section__title {
      max-width: 100%;
      width: 100%;
      text-align: right;
    }

    .about-fund-section__text {
      max-width: 100%;
      width: 100%;
      text-align: right;
    }

    .about-fund-section__foundation-button {
      max-width: 300px;
      width: 100%;
      font-size: 15px;
    }

    .about-fund-section__flower-box {
      top: auto;
      bottom: 0;
      left: 2%;
      padding: 30px;
      width: 240px;
    }

    .about-fund-section__light-green-puzzle {
      display: none;
    }

    .about-fund-section__purple-semicircle {
      bottom: -190px;
      left: calc(69.7% - 75px);
      width: 150px;
      transform: rotate(-90deg);
    }
  }

  @media (max-width: ${ScreenSize.Small}px) {
    padding: 100px 50px 0 50px;
    margin-bottom: 20px;

    .about-fund-section__title {
      font-size: 35px;
    }

    .about-fund-section__foundation-button {
      max-width: 250px;
      width: 100%;
      font-size: 10px;
    }

    .about-fund-section__purple-semicircle {
      display: none;
    }

    .about-fund-section__flower-box {
      position: static;
      width: 130px;
      margin-top: 20px;
    }
  }
`;

export const StyledImage = styled.img`
  object-fit: contain;
  object-position: center;
`;
