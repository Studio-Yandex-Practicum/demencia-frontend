import React from "react";
import { Link } from "react-router-dom";
import { Reference } from "./links";

const StartBtn: React.FC<Reference> = (props): JSX.Element => {
  return (
    <>
      <div>
        <Link to={props.target}>{props.title}</Link>
      </div>
      <div role="img" />
    </>
  );
};

export default StartBtn;
