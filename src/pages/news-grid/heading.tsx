import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

const StyledHeading = styled.h1<{ active?: boolean }>`
  margin: 0 0 70px;
  font-size: 86px;
  line-height: 1.15;
  font-weight: 800;
  font-style: normal;
  text-align: center;
  vertical-align: middle;
  text-transform: uppercase;
  color: #6d097a;
  transition: all 1.5s ease;

  transform: translate(0px, ${({ active }) => (active ? `0px` : `120%`)});
  opacity: ${({ active }) => (active ? `1` : `0`)};

  @media (max-width: 800px) {
    font-size: 64px;
  }

  @media (max-width: 600px) {
    font-size: 42px;
  }
`;

const Heading: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState(true);
  const headingElement = useRef(null);
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
          headingElement.current.offsetTop
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
          headingElement.current.offsetTop
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
    <StyledHeading active={isActive} ref={headingElement}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
