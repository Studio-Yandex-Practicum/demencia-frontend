import React, { useEffect, useRef, useState } from "react";
import { ANIMATION_ACTIVATE_OFFSET } from "../constants";

const AnimationWrapper: React.FC = ({ children }) => {
  const elRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(true);

  function offset(el: HTMLElement) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  function animOnScroll(animItem: HTMLElement | null) {
    if (animItem) {
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = ANIMATION_ACTIVATE_OFFSET;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        setAnimate(false);
      } else {
        setAnimate(true);
      }
    }
  }

  const scrollHandler = () => {
    animOnScroll(elRef.current);
  };

  useEffect(() => {
    animOnScroll(elRef.current);
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return React.cloneElement(children as React.ReactElement, {
    animate,
    ref: elRef,
  });
};

export default AnimationWrapper;
