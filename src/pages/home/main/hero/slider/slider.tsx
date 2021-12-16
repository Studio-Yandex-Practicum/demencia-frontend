import React from "react";
import image from "./img.webp";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./styles.css";

const items = [
  <div className="item" data-value="1">
    <img src={image} width="100px" height="100px" />
  </div>,
  <div className="item" data-value="2">
    <img src={image} width="100px" height="100px" />
  </div>,
  <div className="item" data-value="3">
    <img src={image} width="100px" height="100px" />
  </div>,
  <div className="item" data-value="4">
    <img src={image} width="100px" height="100px" />
  </div>,
  <div className="item" data-value="5">
    <img src={image} width="100px" height="100px" />
  </div>,
];

const Slider: React.FC = () => {
  return (
    <div>
      <AliceCarousel
        animationType="fadeout"
        animationDuration={800}
        disableButtonsControls
        infinite
        items={items}
        mouseTracking
      />
    </div>
  );
};

export default Slider;
