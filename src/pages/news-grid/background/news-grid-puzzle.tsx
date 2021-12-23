import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const StyledImg = styled.img<{
  puzzleType: string;
  active?: boolean;
  rotation?: boolean;
}>`
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes translate {
    0% {
      transofrm: translate(50%, 150%);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  ${({ rotation }) =>
    rotation ? `animation: rotation 15s linear infinite normal;` : ``}

  ${({ puzzleType, active }) => {
    if (puzzleType.includes("news-grid__green-puzzle")) {
      return `
          position: absolute;
          object-fit: contain;
          width: 4.7%;
          height: 5.7%;
          right: 190px;
          top: -.8%;

          @media (max-width: 1500px) {
            & {
              width: 6%;
              height: 7%;
              right: 250px;
              top: .2%;
            }
          }

          @media (max-width: 1020px) {
            & {
              width: 8%;
              height: 9%;
              right: 200px;
              top: .8%;
            }
          }

          @media (max-width: 930px) {
            & {
              top: -1.5%;
            }
          }

          @media (max-width: 640px) {
            & {
              top: -2%;
            }
          }

          @media (max-width: 400px) {
            & {
              top: -2%;
              right: 100px;
              width: 10%;
            }
          }

        `;
    } else if (puzzleType.includes("news-grid__semicircle")) {
      return `
        position: absolute;
        top: -25px;
        right: 0;
        width: 8.9%;
        height: 19.5%;
        transform: translate(-20%, 0px);
        transition: all 2s ease;

        ${active ? `transform: translate(0px, 0px);` : ``}

        @media (max-width: 1437px) {
          & {
              top: -110px;
              width: 12%;
          }
        }

        @media (max-width: 926px) {
          & {
              top: -310px;
              width: 16%;
          }
        }

        @media (max-width: 640px) {
          & {
              top: -270px;
              width: 16%;
          }
        }

        @media (max-width: 600px) {
          & {
              top: -310px;
              width: 16%;
          }
        }

        @media (max-width: 400px) {
          & {
              top: -270px;
              width: 20%;
          }
        }
        `;
    } else if (puzzleType.includes("news-grid__purple-puzzle")) {
      return `
        position: absolute;
        width: 7.3%;
        height: 6.3%;
        left: 130px;
        top: 90px;
        transform: translate(-150%, 130%) rotate(360deg);
        transition: all 3s ease;

        ${active ? `transform: translate(0px, 0px) rotate(0deg);` : ``}

        &:hover {
          transform: rotate(180deg);
        }

        @media (max-width: 1500px) {
          & {
              height: 4.6%;
          }
        }

        @media (max-width: 1020px) {
          & {
              height: 4.8%;
              width: 9%;
          }
        }

        @media (max-width: 930px) {
          & {
              height: 3%;
              width: 11%;
              top: 70px;
          }
        }

        @media (max-width: 640px) {
          & {
              width: 15%;
              left: 100px;
          }
        }

        @media (max-width: 600px) {
          & {
              width: 25%;
              height: 1.5%;
              left: 25px;
              top: 90px;
          }
        }
        `;
    } else if (puzzleType.includes("news-grid__half-green-puzzle")) {
      return `
        position: absolute;
        width: 9.5%;
        height: 12.5%;
        bottom: 200px;
        left: 0;
        z-index: -1;
        transform: translate(0px, 40%);
        transition: all 2s ease;

        ${active ? `transform: translate(0px, 0px);` : ``}

        @media (max-width: 1020px) {
          & {
              width: 25%;
              bottom: 280px;
          }
        }

        @media (max-width: 700px) {
          & {
              width: 18%;
              bottom: 36%;
          }
        }

        @media (max-width: 400px) {
          & {
              width: 36%;
              height: 15%;
          }
        }
        `;
    } else if (puzzleType.includes("news-grid__bottom-purple-puzzle")) {
      return `
        position: absolute;
        bottom: 440px;
        right: 50px;
        width: 8.5%;
        height: 4.5%;
        z-index: -1;

        @media (min-width: 1420px) and (max-width: 1835px) {
          &{
            display: none;
          }
        }

        @media (max-width: 1020px) {
          & {
            width: 10%;
            height: 6%;
            right: 320px;
            bottom: 350px;
          }
        }

        @media (max-width: 400px) {
          & {
            width: 20%;
            right: 120px;
            bottom: 300px;
            z-index: 2;
          }
        }
        `;
    } else if (
      puzzleType.includes("news-grid__translucent-half-green-puzzle")
    ) {
      return `
        position: absolute;
        bottom: 0;
        right: 0;
        width: 7.25%;
        height: 16.7%;
        z-index: -1;
        transform: translate(0px, -40%);
        transition: all 3s ease;

        ${active ? `transform: translate(0px, 0px);` : ``}
        
        @media (max-width: 1020px) {
          & {
              width: 18%;
              height: 21%;
          }
        }

        @media (max-width: 700px) {
          & {
              bottom: 21%;
          }
        }

        @media (max-width: 400px) {
          & {
              bottom: 21%;
              width: 25%;
          }
        }
        `;
    } else {
      return ``;
    }
  }}
`;

interface NewsGridPuzzleProps {
  puzzleImageSource: string;
  newsGridPuzzleType: string;
  active?: boolean;
  rotation?: boolean;
}

const NewsGridPuzzle: React.FC<NewsGridPuzzleProps> = ({
  puzzleImageSource,
  newsGridPuzzleType,
  rotation,
}) => {
  const [isActive, setIsActive] = useState(true);
  const puzzleElement = useRef(null);

  //Получаем высоту body. Если наш window по Y меньше половины body, то проверяем дальше => если позиция window по Y (с вычитом трети высоты window, чтобы элементы скрывались чуть позже) больше позиции элемента current.offsetTop, то деактивируем его, инчае активируем. Далее. Если наш window по Y больше половины body, то нам нужна нижняя координата window по Y, т.е. нужно прибавить высоту window (прибавил треть высоты, чтобы элементы появлялись не слишком рано). Далее сравниваем с позицией элемента current.offsetTop, если наш window больше (ниже) элемента, то активируем его.
  //Пришлось добавить игнорирование Object is possibly 'null'. Да, оно будет null, но только в первое мгновение загрузки. Не смог придумать как это поведение правильно описать по тайпскриптовски
  useEffect(() => {
    const bodyHeight: number =
      document.querySelector("body")?.offsetHeight || 0;
    function puzzleActivator() {
      if (window.scrollY < bodyHeight / 2) {
        if (
          window.scrollY - window.innerHeight / 3 >
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: Object is possibly 'null'.
          puzzleElement.current.offsetTop
        ) {
          setIsActive(false);
        } else {
          setIsActive(true);
        }
      } else {
        if (
          window.scrollY + window.innerHeight / 3 >
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: Object is possibly 'null'.
          puzzleElement.current.offsetTop
        ) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    }
    window.addEventListener("scroll", puzzleActivator);
  }, []);

  return (
    <StyledImg
      src={puzzleImageSource}
      puzzleType={newsGridPuzzleType}
      active={isActive}
      rotation={rotation}
      ref={puzzleElement}
    />
  );
};

export default NewsGridPuzzle;
