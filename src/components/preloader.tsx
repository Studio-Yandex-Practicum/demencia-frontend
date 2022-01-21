import styled from "styled-components";
import { PaletteColor } from "../ui/types";

const StyledPreloader = styled.div`
  @keyframes preloader-inside-white {
    0% {
      -webkit-transform: scale(0, 0);
      -moz-transform: scale(0, 0);
      -ms-transform: scale(0, 0);
      -o-transform: scale(0, 0);
      transform: scale(0, 0);
    }
    100% {
      -webkit-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }

  @keyframes preloader-inside-red {
    0% {
      -webkit-transform: scale(0, 0);
      -moz-transform: scale(0, 0);
      -ms-transform: scale(0, 0);
      -o-transform: scale(0, 0);
      transform: scale(0, 0);
    }
    30% {
      -webkit-transform: scale(0, 0);
      -moz-transform: scale(0, 0);
      -ms-transform: scale(0, 0);
      -o-transform: scale(0, 0);
      transform: scale(0, 0);
    }
    100% {
      -webkit-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  padding: 20px;
  box-sizing: border-box;

  .preloader__container {
    width: 100px;
    height: 100px;
    position: relative;
  }

  .preloader__round {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    background: ${PaletteColor.DarkPurple};
    border-radius: 50px;
  }

  .preloader__round::after,
  .preloader__round::before {
    content: "";
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50px;
  }

  .preloader__round::after {
    background: ${PaletteColor.Green};
    animation: preloader-inside-white 1s ease-in-out infinite;
  }

  .preloader__round::before {
    z-index: 10;
    background: ${PaletteColor.DarkPurple};
    animation: preloader-inside-red 1s ease-in-out infinite;
  }
`;

const Preloader = () => {
  return (
    <StyledPreloader>
      <div className="preloader__container">
        <span className="preloader__round">Загрузка...</span>
      </div>
    </StyledPreloader>
  );
};

export default Preloader;
