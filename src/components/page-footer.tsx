import React from "react";
import { useMatch } from "react-router-dom";
import TestPageFooter from "./page-test-footer";
import NormalPageFooter from "./page-normal-footer";
import { Footer } from "../ui/controls";

const DinamicFooter: React.FC = () => {
  const match = useMatch("/test/*");

  return match ? <TestPageFooter /> : <NormalPageFooter />;
};

const PageFooter: React.FC = () => {
  return (
    <Footer>
      <DinamicFooter />
    </Footer>
  );
};

export default PageFooter;
