import styled from "styled-components";
import pazzles from "../images/test_puzzlesdecor.svg";
import { ScreenSize } from "../ui/types";

const Puzzles = styled.img.attrs((props) => ({
  src: props.src || pazzles,
  alt: props.alt || "",
}))`
  width: 145px;
  height: auto;
  z-index: 301;
  position: relative;
  margin-top: 30%;

  @media screen and (max-width: 1600px) {
    width: 100px;
    margin-top: 40%;
  }

  @media (max-width: ${ScreenSize.Medium}px) {
    margin-top: 20%;
    position: absolute;
    right: 14vw;
  }
  @media (max-width: ${ScreenSize.Small}px) {
    width: 90px;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    width: 61px;
    left: calc(100% - 280px / 2);
    top: 100px;
  }
  @media (max-width: ${ScreenSize.XXSmall}px) {
    top: 48px;
  }
`;

export default Puzzles;
