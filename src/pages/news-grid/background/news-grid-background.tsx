import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const StyledBackground = styled.div<{
  backgroundType: string;
  active?: boolean;
}>`
  position: absolute;
  margin: auto;
  transition: all 5s ease;

  ${({ backgroundType, active }) => {
    if (backgroundType.includes("news-grid__background_theme_lightgreen")) {
      return `
      background-color: #CAE6DF;
      width: 100%;
      height: 775px;
      max-width: 1920px;
      z-index: -2;
      transform: translate(0px, ${active ? `0px` : `50%`});
      `;
    } else if (backgroundType.includes("news-grid__background_theme_purple")) {
      return `  
      background-color: #6D097A;
      top: 772px;
      left: 8.855%;
      z-index: -2;
      width: calc(100% - 8.8% * 2);
      height: 800px;
      transform: translate(0px, ${active ? `0px` : `45%`});
      `;
    }
  }}
`;

interface NewsGridBackgroundProps {
  backgroundType: string;
  active?: boolean;
}

const NewsGridBackground: React.FC<NewsGridBackgroundProps> = ({
  backgroundType,
}) => {
  const [isActive, setIsActive] = useState(true);
  const backgroundElement = useRef(null);
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
          backgroundElement.current.offsetTop
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
          backgroundElement.current.offsetTop
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
    <StyledBackground
      backgroundType={backgroundType}
      active={isActive}
      ref={backgroundElement}
    />
  );
};

export default NewsGridBackground;
