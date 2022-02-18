import React, { useEffect, useRef, useState } from "react";
import { ANIMATION_ACTIVATE_OFFSET } from "../constants";

const AnimationWrapper: React.FC = ({ children }) => {
  const elRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);
  const [y, setY] = useState(0);

  useEffect(() => {
    if (elRef.current) {
      setY(elRef.current.getBoundingClientRect().y);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elRef.current]);

  const scrollHandler = (e: Event) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const doc = e.target.documentElement;

    if (
      doc.scrollTop - ANIMATION_ACTIVATE_OFFSET <= y &&
      y <= doc.scrollTop + window.innerHeight
    ) {
      setAnimate(false);
    } else {
      setAnimate(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);

    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [y]);

  return React.cloneElement(children as React.ReactElement, {
    animate,
    ref: elRef,
  });
};

export default AnimationWrapper;
