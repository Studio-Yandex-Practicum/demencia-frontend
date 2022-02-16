import { RefObject, useEffect, useState } from "react";
import useMouse from "@react-hook/mouse-position";

const useMousePosition = (mapRef: RefObject<SVGSVGElement>) => {
  const [posX, setPosX] = useState<number>(0);
  const [posY, setPosY] = useState<number>(0);
  const mouse = useMouse(mapRef as unknown as RefObject<HTMLElement>, {
    enterDelay: 200,
    leaveDelay: 200,
  });

  useEffect(() => {
    const defineX = () => {
      if (!mouse.isTouch) {
        if (mouse.clientX && mouse.x) {
          const cursorPositionOnMap = mouse.clientX / window.innerWidth;
          if (cursorPositionOnMap < 0.5) {
            return setPosX(mouse.x + 50);
          }
          return setPosX(mouse.x - 350);
        }
      }
      return setPosX(0);
    };

    const defineY = () => {
      if (!mouse.isTouch) {
        if (mouse.y) return setPosY(mouse.y - 150);
      }
      return setPosY(0);
    };

    defineX();
    defineY();
  });

  return [posX, posY];
};

export default useMousePosition;
