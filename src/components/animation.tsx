import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledFadeInAndOutAnimation = styled.div<{
  fade?: boolean;
}>`
  opacity: 1;
  transition: all 0.5s linear;

  ${({ fade }) => {
    if (fade) {
      return `
        opacity: 0;
        transform: translateY(100px);
      `;
    }
  }}
`;

const FadeInAndOutAnimation: React.FC = ({ children }) => {
  /* const element: any = useRef(null);

  useEffect(() => {
    console.log(element.current.getBoundingClientRect().y);
  }, []); */
  /* const [fadeOut, setFadeOut] = useState(false);
  const [elementYcoord, setElementYcoord] = useState(0); */

  /* useEffect(() => {
    setElementYcoord(element.current.getBoundingClientRect().y);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element.current]);

  /* const elementYcoord = element.current.getBoundingClientRect().y; */
  /* const onScrollElement = (e: any, y: number) => {
    console.log("scrollHeight", e.target.documentElement.scrollHeight);
    console.log("scrollTop", e.target.documentElement.scrollTop);
    console.log("innerHeight", window.innerHeight);
    console.log(y);
    console.log("1", e.target.documentElement.scrollTop <= y);
    console.log(
      "2",
      y <= e.target.documentElement.scrollTop + window.innerHeight
    );
    // eslint-disable-next-line prettier/prettier
  if ((e.target.documentElement.scrollTop - 250 <= y) && (y <= (e.target.documentElement.scrollTop + window.innerHeight))) {
      setFadeOut(false);
    } else {
      setFadeOut(true);
    }
  }; */

  /* useEffect(() => {
    document.addEventListener("scroll", (e) =>
      onScrollElement(e, elementYcoord)
    );
    console.log(element);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elementYcoord]); */

  return <StyledFadeInAndOutAnimation>{children}</StyledFadeInAndOutAnimation>;
};

export default FadeInAndOutAnimation;
