import React from "react";
import Menu from "./menu";
import Decor from "./decor";
import StartBtn from "../../utils/startBtn";
import { test } from "../../utils/links";

const Test: React.FC = () => {
  return (
    <div>
      <Menu />
      <Decor />
      <StartBtn target={test.target} title={test.title} />
    </div>
  );
};

export default Test;
