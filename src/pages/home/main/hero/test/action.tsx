import React from "react";
import { Link } from "react-router-dom";
import { test } from "./links";

const Action: React.FC = () => {
  return (
    <>
      <div>
        <Link to={test.ref}>{test.title}</Link>{" "}
      </div>
      <div role="img" />
    </>
  );
};

export default Action;
