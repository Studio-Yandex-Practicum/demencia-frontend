import React from "react";
import { useMatch } from "react-router-dom";
import TestPageFooter from "./test-page-footer";
import NormalPageFooter from "./normal-page-footer";
import { Footer } from "../ui/controls";

const PageFooter: React.FC = () => {
  const match = useMatch("/test/*");

  return <Footer>{match ? <TestPageFooter /> : <NormalPageFooter />}</Footer>;
};

export default PageFooter;
